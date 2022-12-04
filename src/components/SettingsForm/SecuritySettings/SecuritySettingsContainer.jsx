import React, {useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import SecuritySettings from "./SecuritySettings";
import {authAPI} from "../../../services/authApi";
import {setToken} from "../../../store/reducers/AuthReducer";


const mapStateToProps = (state) => {
    return{}
}

const mapDispatchToProps = {};


const SecuritySettingsContainer = () => {
    const [changePassword, status] = authAPI.useChangePasswordMutation();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const onSuccess = (data) => {
        //data.token
        console.log(data.token);
        dispatch(setToken(data.token));
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
    const accessToken = useSelector(state => state.auth.token);
    const onSubmit = (values, {setSubmitting}) => {
        changePassword({accessToken, oldPassword: values.oldPassword, newPassword: values.newPassword})
            .then(data => onResponse(data))
            .then(_ => {setSubmitting(false)})
    }
    return (<SecuritySettings onSubmit={onSubmit} errors={errors}/>);
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(SecuritySettingsContainer);