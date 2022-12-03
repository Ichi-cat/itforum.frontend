import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";



const SecuritySettings = ({onSubmit}) => {
    let passwordSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Old password is empty'),
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
                {({isSubmitting,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit}) => (<Form>
                    <div className="card-body">
                        <h3 className="card-title mt-4">Password</h3>
                        <p className="card-subtitle">You can set a permanent password if you don't want
                            to use temporary login codes.</p>
                        <div className="mb-3">
                            <label className="mb-2">Old password:</label>
                            <Field type="password" name="oldPassword" OnChange={handleChange} className={touched.oldPassword ? "form-control is-invalid" : errors.oldPassword ? "form-control is-valid mb-2" : "form-control mb-2"} placeholder="Valid State.."/>
                            <div>
                                {handleChange}
                                {handleBlur}
                                {handleSubmit}
                            </div>
                            <ErrorMessage name="oldPassword" component="div" className="text-danger"/>
                            <label className="mb-2">New password:</label>
                            <Field type="password"   name="newPassword" className="form-control" placeholder="Invalid State.."/>
                            <ErrorMessage name="newPassword" component="div" className="text-danger"/>
                            <label className="mb-2">Confirm password:</label>
                            <Field type="password" name="confirmPassword" className={touched.confirmPassword ? "form-control is-invalid" : errors.confirmPassword ? "form-control is-valid mb-2" : "form-control mb-2"} placeholder="Invalid State.."/>
                            <ErrorMessage name="confirmPassword" component="div" className="text-danger"/>
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