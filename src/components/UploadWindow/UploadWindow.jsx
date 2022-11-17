import React, {useCallback, useState} from 'react';
import Cropper from "react-easy-crop";
import getCroppedImg from "../../services/cropImage";
import {userAPI} from "../../services/userApi";
import {useSelector} from "react-redux";

const UploadWindow = ({closeModule, onSuccess}) => {
    const [imageSrc, setImageSrc] = React.useState(null)
    const [crop, setCrop] = useState({x: 0, y: 0})
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const accessToken = useSelector(state => state.auth.token);
    const [errors, setErrors] = useState([]);
    const onFailed = (error) => {
        //error.data.Errors
        setErrors(error.data.Errors);
    }

    const [setAvatar, {isLoading, isSuccess, isError }] = userAPI.useSetUserAvatarMutation();

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])
    const showCroppedImage = async () => {
        try {
            const croppedImage = await getCroppedImg(
                imageSrc,
                croppedAreaPixels
            )
            let formData = new FormData();
            console.log(croppedImage)
            formData.append("file", croppedImage);
            setAvatar({accessToken, formData}).then(data => {
                if(data.data){
                    onSuccess();
                    closeModule()
                    return;
                }
                if(data.error.data){
                    onFailed(data.error)
                    return;
                }
                onFailed({data: {Errors: [{Message: "Something went wrong"}]}})
            });
        } catch (e) {
            console.error(e)
        }
    }


    const onFileChange = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            let imageDataUrl = await readFile(file)
            setImageSrc(imageDataUrl)
        }
    }
    return (
        <div className="modal modal-blur fade show" tabIndex="-1" style={{display: "block"}}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Select image</h5>
                        <button type="button" className="btn-close" onClick={closeModule}></button>
                    </div>
                    <div className="modal-body">
                        <input type="file" className="form-control" onChange={onFileChange} accept="image/*"/>
                        {imageSrc && <div className="crop-container mt-2">
                            <Cropper
                                image={imageSrc}
                                crop={crop}
                                zoom={zoom}
                                aspect={1 / 1}
                                cropShape="round"
                                onCropChange={(p) => !isLoading && setCrop(p)}
                                onZoomChange={(p) => !isLoading && setZoom(p)}
                                onCropComplete={onCropComplete}
                            />
                        </div>}
                        {errors && errors.map(error => <div className="text-danger  mb-2">{error.Message}</div>)}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn me-auto" onClick={closeModule}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={showCroppedImage} disabled={!imageSrc}>
                            {isLoading && <span className="spinner-border spinner-border-sm me-2"></span>}
                            Upload</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

function readFile(file) {
    return new Promise((resolve) => {
        const reader = new FileReader()
        reader.addEventListener('load', () => resolve(reader.result), false)
        reader.readAsDataURL(file)
    })
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export default UploadWindow;