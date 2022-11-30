import React, {useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import BaseUserInfo from "./BaseUserInfo";
import {userAPI} from "../../../services/userApi";
import {useNavigate} from "react-router-dom";


const mapStateToProps = (state) => {
    return{}
}

const mapDispatchToProps = {};


const BaseUserInfoContainer = () => {
    const [updateInfo, {status}] = userAPI.useUpdateUserInfoMutation();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const onSuccess = (data) => {
        navigate("/info/2");
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
        updateInfo({userInfo: {
            ...values
            }})
            .then(data => onResponse(data))
            .then(_ => {setSubmitting(false)})
    }
    return (<BaseUserInfo onSubmit={onSubmit} errors={errors}/>);
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(BaseUserInfoContainer);