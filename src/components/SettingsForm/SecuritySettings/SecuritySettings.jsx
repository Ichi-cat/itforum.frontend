import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";



const SecuritySettings = ({onSubmit}) => {
    let passwordSchema = Yup.object().shape({
    newPassword: Yup.string().required('New password is empty')
        .min(8, 'Password is too short - should be 8 chars minimum.'),
    confirmPassword: Yup.string().required('Confirm password is empty')
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
});

    return (
        <div>
            <Formik initialValues={{
                oldPassword: "",
                newPassword: "",
                confirmPassword: ""
            }} onSubmit={onSubmit}
                    validationSchema={passwordSchema}>
                {({isSubmitting}) => (<Form>
                    <div className="card-body">
                        <h3 className="card-title mt-4">Password</h3>
                        <p className="card-subtitle">You can set a permanent password if you don't want
                            to use temporary login codes.</p>
                        <div className="mb-3">
                            <label className="mb-2">Old password:</label>
                            <Field type="password" name="oldPassword" className="form-control"/>
                            <ErrorMessage name="oldPassword" component="div" className="text-danger mb-2"/>
                            <label className="mb-2">New password:</label>
                            <Field type="password"   name="newPassword" className="form-control"/>
                            <ErrorMessage name="newPassword" component="div" className="text-danger mb-2"/>
                            <label className="mb-2">Confirm password:</label>
                            <Field type="password" name="confirmPassword" className="form-control"/>
                            <ErrorMessage name="confirmPassword" component="div" className="text-danger mb-2"/>
                        </div>
                        <div>
                            <button type="submit" className="btn" disabled={isSubmitting}>
                                Set new password
                            </button>
                        </div>
                    </div>
               </Form>)}
            </Formik>
            <div className="card-body">
                <h3 className="card-title mt-4">Two-factor authentication(In developing)</h3>
                <p className="card-subtitle">You can enable two-factor authentication to add an
                    extra layer of security to your account.</p>
                <div>
                    <button disabled href="#" className="btn" >
                        Enable two-factor authentication
                    </button>
                </div>
            </div>

        </div>
    );
};

export default SecuritySettings;