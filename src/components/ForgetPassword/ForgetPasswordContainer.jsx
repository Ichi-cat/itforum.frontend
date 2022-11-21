import React, {useState} from 'react';
import ForgetPassword from "./ForgetPassword";
import {authAPI} from "../../services/authApi";
import {useNavigate} from "react-router-dom";

const ForgetPasswordContainer = () => {
    const [errors, setErrors] = useState([]);
    const [messages, setMessages] = useState([]);
    const [getToken, response] = authAPI.useGetTokenMutation();
    const navigate = useNavigate();
    const onSuccess = (data) => {
        //data.token
        setMessages(["Check your email"]);
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
        const uri = window.location.origin + "/ResetPassword";
        getToken({email: values.email, redirectUri: uri})
            .then(data => onResponse(data))
            .then(_ => {setSubmitting(false)})
    }
    return (
        <ForgetPassword errors={errors} onSubmit={onSubmit} messages={messages}/>
    );
};

export default ForgetPasswordContainer;