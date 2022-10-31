import React from 'react';
import {facebookConfig} from "../../../config";
import {authAPI, setJwtToken} from "../../../services/authApi";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {useDispatch, useSelector} from "react-redux";
import {setToken} from "../../../store/reducers/AuthReducer";
import {useNavigate} from "react-router-dom";

const FacebookAuthenticate = () => {
    const isAuthorized = useSelector((state) => state.auth.isAuth);
    const navigate = useNavigate();
    if(isAuthorized) navigate("/");
    const [facebookAuthenticate, {facebookStatus}] = authAPI.useFacebookAuthenticationMutation();
    const dispatch = useDispatch();
    const responseFacebook = (response) => {
        if(response.status == 'undefined'){
            //todo:Authentication is failed
            return;
        }
        facebookAuthenticate(response.accessToken).then(data =>
            dispatch(setToken(data.data.token)));
        //response.accessToken
    }
    return (
        <FacebookLogin appId={facebookConfig.appId}
                       fields="name,email,picture"
                       callback={responseFacebook}
                       render={renderProps => (
                           <button className="btn w-100" onClick={renderProps.onClick}>
                               <svg xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                   <path
                                       d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                               </svg>
                               Login with Facebook
                           </button>
                       )}/>
    );
};

export default FacebookAuthenticate;