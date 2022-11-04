import React, {useState} from "react";
import {connect, useDispatch} from "react-redux";
import {authAPI} from "../../services/authApi";
import {setToken} from "../../store/reducers/AuthReducer";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import SignUp from "./SignUp";


const mapStateToProps = (state) => {
    return{}
}

const mapDispatchToProps = {};


const SignUpContainer = () => {
    const [sighUp, {status}] = authAPI.useSignUpMutation();
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
    const onSubmit = (values, {setSubmitting}) => {
        sighUp({userName: values.login, password: values.password,
            confirmPassword: values.confirmPassword, email: values.email})
            .then(data => onResponse(data))
            .then(_ => {setSubmitting(false)})
    }
    return (<SignUp onSubmit={onSubmit} errors={errors}/>);
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(SignUpContainer);