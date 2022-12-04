import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useSelector} from "react-redux";
import {userAPI} from "../../../services/userApi";
import {FaUserSecret} from "react-icons/fa";
import UploadWindow from "../../UploadWindow/UploadWindow";
import {authAPI} from "../../../services/authApi";
import DescriptionPlaceHolder from "../../placeholders/DescriptionPlaceHolder/DescriptionPlaceHolder";
import ProfilePlaceHolder from "../../placeholders/ProfilePlaceHolder/ProfilePlaceHolder";

const AccountSettings = ({errors, onSubmit, EmailOnSubmit, userInfoStatus}) => {
    const token = useSelector((state) => state.auth.token);
    const { data: userInfo, isFetching: isUserInfoFetching} = userAPI.useGetFullUserInformationQuery({accessToken: token});
    const [isModuleOpen, setIsModuleOpen] = useState(false);
    return (
        <div>
            <div className="card-body">
                {isUserInfoFetching &&<div className="progress mb-2">
                    <div className="progress-bar progress-bar-indeterminate bg-green"></div>
                </div>}
                {isModuleOpen && <UploadWindow closeModule={() => setIsModuleOpen(false)} onSuccess={()=>{}}/>}
                <h2 className="mb-4">My Account</h2>
                <h3 className="card-title">Profile Details</h3>
                <div className="row align-items-center">
                    {!isUserInfoFetching && <div className="cursor-pointer" onClick={() => setIsModuleOpen(true)}>
                        {userInfo.avatar && <span className="avatar avatar-xl avatar-rounded"
                                                  style={{backgroundImage: `url(${userInfo.avatar})`}}/>}
                        {!userInfo.avatar && <FaUserSecret className="avatar avatar-xl"/>}
                    </div>}
                </div>
                {!isUserInfoFetching && <Formik initialValues={{
                    firstName: userInfo?userInfo.firstName:"",
                    lastName: userInfo?userInfo.lastName:"",
                    birthDate: userInfo?userInfo.birthDate?userInfo.birthDate.split("T")[0]:"":"",
                    location: userInfo?userInfo.location:"",
                    description: userInfo.description,
                    study: userInfo.study,
                    work: userInfo.work
                }} onSubmit={onSubmit}>
                    {({isSubmitting}) => (<Form>
                            <h3 className="card-title mt-4">Basic Info</h3>
                            <div className="row g-3">
                                <div className="col-md">
                                    <div className="form-label">First Name</div>
                                    <Field type="text" name="firstName" className="form-control" placeholder="Enter first name"/>
                                    <ErrorMessage name="firstName" component="div" className="text-danger"/>
                                </div>
                                <div className="col-md">
                                    <div className="form-label">Last Name</div>
                                    <Field type="text" name="lastName" className="form-control" placeholder="Enter last name"/>
                                    <ErrorMessage name="lastName" component="div" className="text-danger"/>
                                </div>
                                <div className="col-md">
                                    <div className="form-label">Birth Date</div>
                                    <Field type="date" name="birthDate" className="form-control" placeholder="Enter birth date"/>
                                    <ErrorMessage name="birthDate" component="div" className="text-danger"/>
                                </div>

                            </div>
                            <br/>
                            <div className="row g-3">
                                <div className="col-md">
                                    <div className="form-label">Location</div>
                                    <Field type="text" name="location" className="form-control" placeholder="Enter your location"/>
                                    <ErrorMessage name="location" component="div" className="text-danger"/>
                                </div>
                                <div className="col-md">
                                    <div className="form-label">Study Place</div>
                                    <Field type="text" name="study" className="form-control" placeholder="Enter study place"/>
                                    <ErrorMessage name="study" component="div" className="text-danger"/>
                                </div>
                                <div className="col-md">
                                    <div className="form-label">Work Place</div>
                                    <Field type="text" name="work" className="form-control" placeholder="Enter work place"/>
                                    <ErrorMessage name="work" component="div" className="text-danger"/>
                                </div>
                            </div>
                            <h3 className="card-title mt-4">Description</h3>
                            <p className="card-subtitle">Short description to your profile</p>
                            <div>
                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <Field as="textarea" className="form-control" name="description" rows="5"></Field>
                                </div>
                            </div>
                        <br/>
                        <div className="card-footer bg-transparent mt-auto">
                            <div className="btn-list justify-content-end">
                                {errors && errors.map(error => <div className="text-danger  mb-2">{error.Message}</div>)}
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
                            </div>
                        </div>
                        </Form>)}
                </Formik>}
                {isUserInfoFetching && <ProfilePlaceHolder/>}
                {!isUserInfoFetching && <Formik initialValues={{
                    email: userInfo.email
                }} onSubmit={EmailOnSubmit}>
                    {({isSubmitting}) => (<Form>
                        <h3 className="card-title mt-4">Email</h3>
                        <p className="card-subtitle">This contact will be shown to others publicly, so
                            choose it carefully.</p>
                        <div>
                            <div className="row g-2">
                                <div className="col-auto">
                                    <Field type="email" name="email" className="form-control mb-2" style={{"width":"400px"}}
                                           placeholder="Enter your email"/>
                                </div>
                            </div>
                            <div className="card-footer bg-transparent mt-auto">
                                <div className="btn-list justify-content-end">
                                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </Form>)}
                </Formik>}
            </div>
        </div>
    );
};

export default AccountSettings;