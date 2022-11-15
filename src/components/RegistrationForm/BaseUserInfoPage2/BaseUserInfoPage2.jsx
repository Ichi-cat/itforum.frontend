import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {userAPI} from "../../../services/userApi";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {FaUserSecret} from "react-icons/fa";
import UploadWindow from "../../UploadWindow/UploadWindow";


const BaseUserInfoPage2 = ({errors, onSubmit}) => {
    const navigate = useNavigate();
    const [isModuleOpen, setIsModuleOpen] = useState(false);
    const token = useSelector((state) => state.auth.token);
    const { data: userInfo, isFetching: isUserInfoFetching, isFetching, isError, refetch } = userAPI.useGetFullUserInformationQuery(token);
    return (
        <div>
            <div className="page page-center">
                {isModuleOpen && <UploadWindow closeModule={() => setIsModuleOpen(false)} onSuccess={refetch}/>}
                <div className="container container-tight py-4">
                    <div className="text-center mb-4">
                        <a href="" className="navbar-brand navbar-brand-autodark">
                            <h1 className="cursor-pointer" onClick={() => navigate("/")}>ITForum</h1>
                        </a>
                    </div>
                    {!isUserInfoFetching && <Formik initialValues={{
                        description: userInfo.description,
                        study: userInfo.study,
                        work: userInfo.work,
                    }} onSubmit={onSubmit}>
                        {({isSubmitting}) => (<Form className="card card-md" autoComplete="off" noValidate>
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">Base info</h2>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="cursor-pointer" onClick={() => setIsModuleOpen(true)}>
                                                {userInfo.avatar && <span className="avatar avatar-xl avatar-rounded"
                                                                         style={{backgroundImage: `url(${userInfo.avatar})`}}/>}
                                                {!userInfo.avatar && <FaUserSecret className="avatar avatar-xl"/>}
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-8 col-sm-12">
                                            <Field as="textarea" className="form-control" name="description" rows="5"></Field>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Your study place</label>
                                    <Field type="text" name="study" className="form-control" placeholder="Enter last name"/>
                                    <ErrorMessage name="study" component="div" className="text-danger"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Your work place</label>
                                    <Field type="text" name="work" className="form-control" placeholder="Enter birth date"/>
                                    <ErrorMessage name="work" component="div" className="text-danger"/>
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

export default BaseUserInfoPage2;