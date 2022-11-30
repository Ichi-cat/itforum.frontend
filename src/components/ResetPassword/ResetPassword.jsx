import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate, useParams, useSearchParams} from "react-router-dom";
import * as Yup from "yup";

const ResetPassword = ({errors, onSubmit}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();
    const showPasswordOnClick = () => {
        setShowPassword(!showPassword);
    }
    const showConfirmPasswordOnClick = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }
    const validateForm = Yup.object().shape({
        password: Yup.string().matches("^(?=.*[a-zA-Z]).{6,}$", "Password is not correct. Min 6"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });
    return (
        <div className="page page-center">
            <div className="container container-tight py-4">
                <div className="text-center mb-4">
                    <h1 className="cursor-pointer" onClick={() => navigate("/")}>ITForum</h1>
                </div>
                <div className="card card-md">
                    <div className="card-body">
                        <h2 className="h2 text-center mb-4">Set new password</h2>
                        <Formik initialValues={{email: "", password: "", confirmPassword: ""}} validationSchema={validateForm} onSubmit={onSubmit}>
                            {({isSubmitting}) => (
                                <Form autoComplete="off">
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <div className="input-group input-group-flat">
                                            <Field type={!showPassword ? "password" : "text"} name="password" className="form-control" placeholder="Password"
                                                   autoComplete="off"/>
                                            <span className="input-group-text">
                                  <span className="link-secondary cursor-pointer" onClick={showPasswordOnClick} data-bs-toggle="tooltip" aria-label="Show password"
                                        data-bs-original-title="Show password">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                           viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                           stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle
                                          cx="12" cy="12" r="2"></circle><path
                                          d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path></svg>
                                  </span>
                                </span>
                                        </div>
                                        <ErrorMessage name="password" component="div" className="text-danger"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Confirm password</label>
                                        <div className="input-group input-group-flat">
                                            <Field type={!showConfirmPassword ? "password" : "text"} name="confirmPassword" className="form-control" placeholder="Confirm password"
                                                   autoComplete="off"/>
                                            <span className="input-group-text">
                                  <span className="link-secondary cursor-pointer" onClick={showConfirmPasswordOnClick} data-bs-toggle="tooltip" aria-label="Show password"
                                        data-bs-original-title="Show password">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                           viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                           stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle
                                          cx="12" cy="12" r="2"></circle><path
                                          d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path></svg>
                                  </span>
                                </span>
                                        </div>
                                        <ErrorMessage name="confirmPassword" component="div" className="text-danger"/>
                                    </div>
                                    <div className="form-footer">
                                        {errors && errors.map(error => <div className="text-danger  mb-2">{error.Message}</div>)}
                                        <button type="submit" className="btn btn-primary w-100"  disabled={isSubmitting}>Change password</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
                <div className="text-center text-muted mt-3">
                    Remember password? <Link to="/SignIn" tabIndex={-1}>Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;