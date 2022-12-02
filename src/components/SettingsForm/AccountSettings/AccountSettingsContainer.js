import React, {useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {userAPI} from "../../../services/userApi";
import {useNavigate} from "react-router-dom";
import AccountSettings from "./AccountSettings";


const mapStateToProps = (state) => {
    return{}
}

const mapDispatchToProps = {};


const AccountSettingsContainer = () => {
    const [updateInfo, {status}] = userAPI.useUpdateUserInfoMutation();
    const accessToken = useSelector((state) => state.auth.token);
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const onSuccess = (data) => {
        navigate("/");
    }
    const onFailed = (error) => {
        //error.data.Errors
        setErrors(error.data.Errors);
    }
    const onResponse = (data) => {
        if(data.error) onFailed(data.error);
        else onSuccess(data.data);
        return data;
    }
    const onSubmit = (values, {setSubmitting}) => {
        debugger;
        updateInfo({accessToken, userInfo: {
                ...values
            }})
            .then(data => onResponse(data))
            .then(_ => {setSubmitting(false)})
    }
    return (<AccountSettings onSubmit={onSubmit} errors={errors}/>);
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(AccountSettingsContainer);