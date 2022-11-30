import React from 'react';
import {FaUserSecret} from 'react-icons/fa'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {userAPI} from "../../../services/userApi";

const ProfileCard = () => {
    const isAuthorized = useSelector((state) => state.auth.isAuth);
    const { data: userInfo, isLoading, isFetching, isError } = userAPI.useGetUserInformationQuery({skip: !isAuthorized});
    return (
        <div className="card mx-auto" style={{margin: "0 auto"}}>
            <div className="card-body text-center">
                <div className="mb-3">
                    {userInfo && userInfo.avatar? <span className="avatar avatar-xl avatar-rounded"
                                      style={{backgroundImage: `url(${userInfo && userInfo.avatar})`}}/>:
                        <FaUserSecret className="avatar avatar-xl avatar-rounded"/>}
                </div>
                <div className="card-title mb-1">{userInfo && userInfo.fullName}</div>
                <div className="text-muted">Programmer</div>
            </div>
            <Link to="/profile" className="card-btn">View full profile</Link>
        </div>
    );
};

export default ProfileCard;