import React from 'react';
import ProfilePlaceHolder from "../placeholders/ProfilePlaceHolder/ProfilePlaceHolder";
import {FaUserSecret} from "react-icons/fa";
import {userAPI} from "../../services/userApi";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const ShortProfileDescription = () => {
    const isAuthorized = useSelector((state) => state.auth.isAuth);
    const accessToken = useSelector((state) => state.auth.token);
    let profileId = useParams().profileId?.toString();
    const { data: userInfo, isFetching: isUserInfoFetching, isError, error } = userAPI.useGetFullUserInformationQuery({accessToken, profileId}, {skip: !isAuthorized && !profileId})
    return (
        <>
            {(!isUserInfoFetching && !isError) && <div className="card card-body h-100">
                {userInfo.avatar?<span className="avatar userAvatar mx-auto" key={userInfo.avatar}
                                       style={{backgroundImage: `url(${userInfo? userInfo.avatar:""})`,
                                           display: isUserInfoFetching?"none":"inline-flex"}}/>
                    :
                    <FaUserSecret className="avatar userAvatar mx-auto"/>}
                <br/>
                {/*<h3 className="form-control-plaintext">{userInfo && userInfo.userName}</h3>*/}
                <h4>{userInfo && userInfo.fullName}</h4>
                <h5>Programmer(нихуя тут нет)</h5>
                <h5>E-Mail: {userInfo && userInfo.email}</h5>
            </div>}
            {isUserInfoFetching || isError && <ProfilePlaceHolder/>}
        </>
    );
};

export default ShortProfileDescription;