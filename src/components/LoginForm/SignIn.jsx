import {Link, useNavigate} from "react-router-dom";
import {authAPI} from "../../services/authApi";
import LoginGithub from 'react-login-github';
import FacebookAuthenticate from "./FacebookAuthenticate/FacebookAuthenticate";
import GitHubAuthenticate from "./GitHubAuthenticate/GitHubAuthenticate";


export const SignIn = () => {
    const navigate = useNavigate();
    const [sighIn, {status}] = authAPI.useSignInMutation();

    const signInOnClick = () => {
        sighIn({userName: "string", password: "string"}).then(data => console.log(data));
    }
    return (
        <div className="page page-center">
            <div className="container container-tight py-4">
                <div className="text-center mb-4">
                    <h1 className="cursor-pointer" onClick={() => navigate("/")}>ITForum</h1>
                </div>
                <div className="card card-md">
                    <div className="card-body">
                        <h2 className="h2 text-center mb-4">Login to your account</h2>
                        <form action="./" method="get" autoComplete="off" noValidate>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" placeholder="your@email.com"
                                       autoComplete="off"/>
                            </div>
                            <div className="mb-2">
                                <label className="form-label">
                                    Password
                                    <span className="form-label-description">
                    <a href="./forgot-password.html">I forgot password</a>
                  </span>
                                </label>
                                <div className="input-group input-group-flat">
                                    <input type="password" className="form-control" placeholder="Your password"
                                           autoComplete="off"/>
                  <span className="input-group-text">
                    <a href="./SignIn#SignIn.jsx" className="link-secondary" data-bs-toggle="tooltip" aria-label="Show password"
                       data-bs-original-title="Show password">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                             viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                             stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"
                                      fill="none"></path><circle cx="12"
                                                                 cy="12"
                                                                 r="2"></circle><path
                            d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path></svg>
                    </a>
                  </span>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="form-check">
                                    <input type="checkbox" className="form-check-input"/>
                                        <span className="form-check-label">Remember me on this device</span>
                                </label>
                            </div>
                            <div className="form-footer">
                                <button type="submit" className="btn btn-primary w-100">Sign in</button>
                            </div>
                        </form>
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