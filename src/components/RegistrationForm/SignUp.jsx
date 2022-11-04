import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useState} from "react";

export const SignUp = ({onSubmit, errors}) => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const showPasswordOnClick = () => {
        setShowPassword(!showPassword);
    }
    const showConfirmPasswordOnClick = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }
    const validateForm = Yup.object().shape({
        login: Yup.string().required('Required').matches("^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$", "UserName is not correct(6-20 symbols)"),
        email: Yup.string().required('Required').email("Email is not correct"),
        password: Yup.string().matches("^(?=.*[a-zA-Z]).{6,}$", "Password is not correct. Min 6"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });
    return(
        <div className="page page-center">
            <div className="container container-tight py-4">
                    <div className="text-center mb-4">
                        <a href="" className="navbar-brand navbar-brand-autodark">
                            <h1 className="cursor-pointer" onClick={() => navigate("/")}>ITForum</h1>
                        </a>
                    </div>
                <Formik initialValues={{
                    login: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                }} onSubmit={onSubmit}
                validationSchema={validateForm}>
                    {({isSubmitting}) => (<Form className="card card-md" autoComplete="off" noValidate>
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Create new account</h2>
                            <div className="mb-3">
                                <label className="form-label">Login</label>
                                <Field type="text" name="login" className="form-control" placeholder="Enter login"/>
                                <ErrorMessage name="login" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <Field type="email" name="email" className="form-control" placeholder="Enter email"/>
                                <ErrorMessage name="email" component="div" className="text-danger"/>
                            </div>
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

                            <div className="mb-3">
                                {/*<label className="form-check">
                                    <input type="checkbox" className="form-check-input"/>
                                        <span className="form-check-label">Agree the
                                            <a href="./terms-of-service.html" > terms and policy
                                            </a>.
                                        </span>
                                </label>*/}
                            </div>

                            <div className="form-footer">
                                {errors && errors.map(error => <div className="text-danger  mb-2">{error.Message}</div>)}
                                <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>Create new account</button>
                            </div>
                        </div>
                    </Form>)}
                </Formik>
                    <div className="text-center text-muted mt-3">
                        Already have account? <Link to="/SignIn" tabIndex={-1}>Sign in</Link>
                    </div>
            </div>
        </div>
    )
}
export default SignUp;