import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import * as Yup from "yup";

const ForgetPassword = ({errors, onSubmit, messages}) => {
    const navigate = useNavigate();
    const validateForm = Yup.object().shape({
        email: Yup.string().required('Required').email("Email is not correct")
    });
    return (
        <div className="page page-center">
            <div className="container container-tight py-4">
                <div className="text-center mb-4">
                    <a href="" className="navbar-brand navbar-brand-autodark">
                        <h1 className="cursor-pointer" onClick={() => navigate("/")}>ITForum</h1>
                    </a>
                </div>
                <Formik initialValues={{
                    email: ""
                }} onSubmit={onSubmit}
                        validationSchema={validateForm}>
                    {({isSubmitting}) => (<Form className="card card-md" autoComplete="off" noValidate>
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Forget password</h2>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <Field type="email" name="email" className="form-control" placeholder="Enter email"/>
                                <ErrorMessage name="email" component="div" className="text-danger"/>
                            </div>

                            <div className="form-footer">
                                {errors && errors.map(error => <div className="text-danger  mb-2">{error.Message}</div>)}
                                {messages && messages.map(message => <div className="text-capitalize text  mb-2">{message}</div>)}
                                <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>Send email</button>
                            </div>
                        </div>
                    </Form>)}
                </Formik>
                <div className="text-center text-muted mt-3">
                    Already have account? <Link to="/SignIn" tabIndex={-1}>Sign in</Link>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;