import {Link, useNavigate} from "react-router-dom";

export const SignUp = () => {
    const navigate = useNavigate();
    return(
        <div className="page page-center">
            <div className="container container-tight py-4">
                    <div className="text-center mb-4">
                        <a href="" className="navbar-brand navbar-brand-autodark">
                            <h1 className="cursor-pointer" onClick={() => navigate("/")}>ITForum</h1>
                        </a>
                    </div>
                    <form className="card card-md" action="./" method="get" autoComplete="off" noValidate>
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Create new account</h2>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder="Enter name"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <div className="input-group input-group-flat">
                                    <input type="password" className="form-control" placeholder="Password"
                                           autoComplete="off"/>
                                <span className="input-group-text">
                                  <a href="./SignUp#SignUp.jsx" className="link-secondary" data-bs-toggle="tooltip" aria-label="Show password"
                                     data-bs-original-title="Show password">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                           viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                           stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle
                                          cx="12" cy="12" r="2"></circle><path
                                          d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path></svg>
                                  </a>
                                </span>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm password</label>
                                <div className="input-group input-group-flat">
                                    <input type="password" className="form-control" placeholder="Confirm password"
                                           autoComplete="off"/>
                                    <span className="input-group-text">
                                  <a href="./SignUp#SignUp.jsx" className="link-secondary" data-bs-toggle="tooltip" aria-label="Show password"
                                     data-bs-original-title="Show password">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                           viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                           stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle
                                          cx="12" cy="12" r="2"></circle><path
                                          d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path></svg>
                                  </a>
                                </span>
                                </div>
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
                                <button type="submit" className="btn btn-primary w-100">Create new account</button>
                            </div>
                        </div>
                    </form>
                    <div className="text-center text-muted mt-3">
                        Already have account? <Link to="/SignIn" tabIndex={-1}>Sign in</Link>
                    </div>
            </div>
        </div>
    )
}
export default SignUp;