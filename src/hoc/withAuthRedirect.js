import React from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        const navigate = useNavigate();
        if(props.isAuth) navigate("/");
        return (
            <Component {...props}/>
        )
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}
