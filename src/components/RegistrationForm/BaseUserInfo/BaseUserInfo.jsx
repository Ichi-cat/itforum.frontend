import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {userAPI} from "../../../services/userApi";
import {useSelector} from "react-redux";

const BaseUserInfo = ({errors, onSubmit}) => {
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);
    const { data: userInfo, isFetching: isUserInfoFetching, isFetching, isError, refetch } = userAPI.useGetFullUserInformationQuery(token);
    const validateForm = Yup.object().shape({
        firstName: Yup.string().required('Required').max(32),
        lastName: Yup.string().max(32),
        birthDate: Yup.date().required('Required').max(new Date(), "You're too young"),
        location: Yup.string().max(32)
    });
    return (
        <div>
            <div className="page page-center">
                <div className="container container-tight py-4">
                    <div className="text-center mb-4">
                        <a href="" className="navbar-brand navbar-brand-autodark">
                            <h1 className="cursor-pointer" onClick={() => navigate("/")}>ITForum</h1>
                        </a>
                    </div>
                    {!isUserInfoFetching && <Formik initialValues={{
                        firstName: userInfo.firstName,
                        lastName: userInfo.lastName,
                        birthDate: userInfo.birthDate?userInfo.birthDate.split("T")[0]:"",
                        location: userInfo.location
                    }} onSubmit={onSubmit}
                            validationSchema={validateForm}>
                        {({isSubmitting}) => (<Form className="card card-md" autoComplete="off" noValidate>
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">Base info</h2>
                                <div className="mb-3">
                                    <label className="form-label">First name</label>
                                    <Field type="text" name="firstName" className="form-control" placeholder="Enter first name"/>
                                    <ErrorMessage name="firstName" component="div" className="text-danger"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Last name</label>
                                    <Field type="text" name="lastName" className="form-control" placeholder="Enter last name"/>
                                    <ErrorMessage name="lastName" component="div" className="text-danger"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Birth date</label>
                                    <Field type="date" name="birthDate" className="form-control" placeholder="Enter birth date"/>
                                    <ErrorMessage name="birthDate" component="div" className="text-danger"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Location</label>
                                    <Field type="email" name="location" className="form-control" placeholder="Enter your location"/>
                                    <ErrorMessage name="location" component="div" className="text-danger"/>
                                </div>

                                <div className="form-footer">
                                    {errors && errors.map(error => <div className="text-danger  mb-2">{error.Message}</div>)}
                                    <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>Next</button>
                                </div>
                            </div>
                        </Form>)}
                    </Formik>}
                </div>
            </div>
        </div>
    );
};


export default BaseUserInfo;