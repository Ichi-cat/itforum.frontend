import React from 'react';

const ProfilePlaceHolder = ({className}) => {
    return (
        <div className={"card " + className}>
            <div className="card-body py-5 text-center">
                <div>
                    <div className="avatar avatar-rounded avatar-lg placeholder mb-3"></div>
                </div>
                <div className="mt w-75 mx-auto">
                    <div className="placeholder col-9 mb-3"></div>
                    <div className="placeholder placeholder-xs col-10"></div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePlaceHolder;