import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {userAPI} from "../../services/userApi";
import {useSelector} from "react-redux";
import UploadWindow from "../UploadWindow/UploadWindow";
import {Navigate} from "react-router-dom";
import MyLikedTopicsCard from "./MyLikedTopicsCard";
import UsersTopicsCard from "./UsersTopicsCard";
import ShortProfileDescription from "./ShortProfileDescription";
import AddictionalProfileInfoCard from "./AddictionalProfileInfoCard";

const ProfileDetails = (props) => {
    const [isModuleOpen, setIsModuleOpen] = useState(false);
    const isAuthorized = useSelector((state) => state.auth.isAuth);
    const accessToken = useSelector((state) => state.auth.token);
    let profileId = useParams().profileId?.toString();
    const { data: userInfo, isFetching: isUserInfoFetching, isError, error } = userAPI.useGetFullUserInformationQuery({accessToken, profileId}, {skip: !isAuthorized && !profileId});
    if(isError) console.log(error.data)
    return (
        <div className="container text-center">
            {isError&&error.data.Errors.map(err=><p className="mt-1 text-danger">{err.Message}</p>)}
            {!isAuthorized && !profileId && <Navigate to="/" replace/>}
            {isModuleOpen && <UploadWindow closeModule={() => setIsModuleOpen(false)} onSuccess={() => {}}/>}
            {/*<button className="btn" onClick={() => setIsModuleOpen(true)}></button>*/}
            <div className="row justify-content-md-center">
                <div className="col-lg-3 col-md-10 col-sm-12 mt-1">
                    <ShortProfileDescription userInfo={userInfo} isError={isError} isUserInfoFetching={isUserInfoFetching}/>
                </div>
                <div className="col-lg-9 col-md-10 col-sm-12 mt-1">
                    <AddictionalProfileInfoCard/>
                </div>
            </div>
            <div className="row mt-3 justify-content-md-center">
                <div className="col-lg-3 col-md-3 col-sm-4">
                    <MyLikedTopicsCard/>
                </div>
                <div className="col-lg-9 col-md-7 col-sm-8">
                    <UsersTopicsCard/>
                </div>
            </div>
        </div>
    );
}

export default ProfileDetails;