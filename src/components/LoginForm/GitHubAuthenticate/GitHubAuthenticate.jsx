import React from 'react';
import LoginGithub from "react-login-github";
import {authAPI} from "../../../services/authApi";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setToken} from "../../../store/reducers/AuthReducer";

const GitHubAuthenticate = () => {
    const isAuthorized = useSelector((state) => state.auth.isAuth);
    const navigate = useNavigate();
    if(isAuthorized) navigate("/");
    const [gitHubAuthenticate, response] = authAPI.useGithubAuthenticationMutation();
    console.log("data");
    console.log(response);
    debugger;
    const dispatch = useDispatch();
    const onSuccess = response => {
        gitHubAuthenticate(response.code)
            .then(data => dispatch(setToken(data.data.token)));
            // .then(data => setJwtToken(data))
            // .then(data => dispatch())
            // .then(_ => navigate("/"));
    }
    const onFailure = response => {
        console.log(response)

    };
    return (
        <LoginGithub className="btn w-100"
                     clientId="6e58945451b0086ef8f8"
                     scope="user user:email"
                     onSuccess={onSuccess}
                     onFailure={onFailure}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-github" width="24"
                 height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                 stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
            Login with Github
        </LoginGithub>
    );
};

export default GitHubAuthenticate;