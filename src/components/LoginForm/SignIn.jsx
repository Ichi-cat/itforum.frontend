import {Link, useNavigate} from "react-router-dom";
import FacebookAuthenticate from "./FacebookAuthenticate/FacebookAuthenticate";
import GitHubAuthenticate from "./GitHubAuthenticate/GitHubAuthenticate";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useState} from "react";
import * as Yup from 'yup'


export const SignIn = ({onSubmit, errors}) => {
    debugger;
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const showPasswordOnClick = () => {
        setShowPassword(!showPassword);
    }
    const validateForm = Yup.object().shape({
        login: Yup.string().required('Required')
            .test('is-email', (({value}) => {
                return value.includes('@') ? "Email is not correct" : "Username is required (8-20)";
            }), (value) => {
                if (value) {
                    return value.includes('@') ? Yup.string().email().isValidSync(value) :
                        Yup.string().matches("^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$").isValidSync(value)
                }
                return false
            })
    });
    return (
        <div className="page page-center">
            <div className="container container-tight py-4">
                <div className="text-center mb-4">
                    <h1 className="cursor-pointer" onClick={() => navigate("/")}>ITForum</h1>
                </div>
                <div className="card card-md">
                    <div className="card-body">
                        <h2 className="h2 text-center mb-4">Login to your account</h2>
                        <Formik initialValues={{login: "", password: "", remember: false}} validationSchema={validateForm} onSubmit={onSubmit}>
                            {({isSubmitting}) => (
                                <Form autoComplete="off">
                                    <div className="mb-3">
                                        <label className="form-label">Email address or username</label>
                                        <Field type="text" name="login" className="form-control" placeholder="your@email.com"
                                               autoComplete="off"/>
                                        <ErrorMessage name="login" component="div" className="text-danger"/>
                                    </div>

                                    <div className="mb-2">
                                        <label className="form-label">
                                            Password
                                            <span className="form-label-description link-primary cursor-pointer">I forgot password</span>
                                        </label>
                                        <div className="input-group input-group-flat">
                                            <Field type={showPassword? "password" : "text"} name="password" className="form-control" placeholder="Your password"
                                                   autoComplete="off"/>
                                            <span className="input-group-text">
                    <span className="link-secondary cursor-pointer" data-bs-toggle="tooltip" aria-label="Show password"
                       data-bs-original-title="Show password" onClick={showPasswordOnClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                             viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                             stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"
                                                                                  fill="none"></path><circle cx="12"
                                                                                                             cy="12"
                                                                                                             r="2"></circle><path
                            d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path></svg>
                    </span>
                  </span>
                                        </div>
                                        <ErrorMessage name="password" component="div" className="text-danger"/>
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-check">
                                            <Field type="checkbox" name="remember" className="form-check-input"/>
                                            <span className="form-check-label">Remember me on this device</span>
                                        </label>
                                    </div>
                                    <div className="form-footer">
                                        {errors && errors.map(error => <div className="text-danger  mb-2">{error.Message}</div>)}
                                        <button type="submit" className="btn btn-primary w-100"  disabled={isSubmitting}>Sign in</button>
                                    </div>
                                </Form>
                            )}
                    </Formik>
                    </div>
                    <div className="hr-text">or</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <GitHubAuthenticate/>
                            </div>
                            <div className="col">
                                <FacebookAuthenticate/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-muted mt-3">
                    Don't have account yet? <Link to="/SignUp" tabIndex={-1}>Sign up</Link>
                </div>
            </div>
        </div>
    )
}
export default SignIn;