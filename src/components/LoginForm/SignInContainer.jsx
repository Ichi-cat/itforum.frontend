import React, {useState} from "react";
import {connect, useDispatch} from "react-redux";
import SignIn from "./SignIn";
import {authAPI} from "../../services/authApi";
import {setToken} from "../../store/reducers/AuthReducer";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const mapStateToProps = (state) => {
    return{}
}

const mapDispatchToProps = {};


const SignInContainer = () => {
    const [sighIn, {status}] = authAPI.useSignInMutation();
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
        debugger;
        if(data.error) onFailed(data.error);
        else onSuccess(data.data);
        return data;
    }
    const onSubmit = (values, {setSubmitting}) => {
        sighIn({userName: values.login, password: values.password})
            .then(data => onResponse(data))
            .then(_ => {setSubmitting(false)})
    }
    return (<SignIn onSubmit={onSubmit} errors={errors} onResponse={onResponse}/>);
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(SignInContainer);