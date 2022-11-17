import React from 'react';
import MeProfile from "../../../img/20220721_145514.jpg";
import {Link} from "react-router-dom";

const ProfileCard = () => {
    return (
        <div className="card mx-auto" style={{margin: "0 auto"}}>
            <Link to="/profile" className="card-body text-center">
                <div className="mb-3">
                                <span className="avatar avatar-xl avatar-rounded"
                                      style={{backgroundImage: `url(${MeProfile})`}}/>
                </div>
                <div className="card-title mb-1">Stas Holoborodyi</div>
                <div className="text-muted">Programmer</div>
            </Link>
            <Link to="" className="card-btn">Liked topics</Link>
        </div>
    );
};

export default ProfileCard;