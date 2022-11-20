import React, {useState} from 'react';
import {authAPI} from "../../services/authApi";
import {useNavigate, useSearchParams} from "react-router-dom";
import ResetPassword from "./ResetPassword";

const ResetPasswordContainer = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const token = searchParams.get("token");
    const email = searchParams.get("email");
    const [errors, setErrors] = useState([]);
    const [resetPassword, response] = authAPI.useResetPasswordMutation();
    const navigate = useNavigate();
    const onSuccess = (data) => {
        navigate("/SignIn");
    }
    const onFailed = (error) => {
        //error.data.Errors
        setErrors(error.data.Errors);
    }
    const onResponse = (data) => {
        if (data.error) onFailed(data.error);
        else onSuccess(data.data);
        return data;
    }
    const onSubmit = (values, {setSubmitting}) => {
        resetPassword({
            password: values.password,
            confirmPassword: values.confirmPassword,
            email: email,
            token: token
        }).then(data => onResponse(data))
            .then(_ => {
                setSubmitting(false)
            })
    };
    return (
        <ResetPassword onSubmit={onSubmit} errors={errors}/>
    );
}

export default ResetPasswordContainer;