import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (path) => (Component) => {
    const RedirectComponent = (props) => {
        return (
            <>
                {props.isAuth && <Navigate to={path} replace/>}
                <Component {...props}/>
            </>
        )
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}
