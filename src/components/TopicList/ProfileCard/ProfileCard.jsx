import React from 'react';
import MeProfile from "../../../img/20220721_145514.jpg";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {userAPI} from "../../../services/userApi";

const ProfileCard = () => {
    const isAuthorized = useSelector((state) => state.auth.isAuth);
    const token = useSelector((state) => state.auth.token);
    const { data: userInfo, isLoading, isFetching, isError } = userAPI.useGetUserInformationQuery(token, {skip: !isAuthorized});
    return (
        <div className="card mx-auto" style={{margin: "0 auto"}}>
            <div className="card-body text-center">
                <div className="mb-3">
                                <span className="avatar avatar-xl avatar-rounded"
                                      style={{backgroundImage: `url(${userInfo && userInfo.avatar})`}}/>
                </div>
                <div className="card-title mb-1">{userInfo.firstName} {userInfo.lastName}</div>
                <div className="text-muted">Programmer</div>
            </div>
            <Link to="/profile" className="card-btn">View full profile</Link>
        </div>
    );
};

export default ProfileCard;