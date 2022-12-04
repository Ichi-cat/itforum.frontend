import React from 'react';
import DescriptionPlaceHolder from "../placeholders/DescriptionPlaceHolder/DescriptionPlaceHolder";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {userAPI} from "../../services/userApi";

const AddictionalProfileInfoCard = () => {
    const isAuthorized = useSelector((state) => state.auth.isAuth);
    const accessToken = useSelector((state) => state.auth.token);
    let profileId = useParams().profileId?.toString();
    const { data: userInfo, isFetching: isUserInfoFetching, isError, error } = userAPI.useGetFullUserInformationQuery({accessToken, profileId}, {skip: !isAuthorized && !profileId});
    return (
        <>
            {(!isUserInfoFetching && !isError) && <div className="card card-body markdown h-100 text-start divide-y">
                <div className="row">
                    <div className="card-title">Basic info</div>
                    <div className="col-6">
                        <div className="mb-2">
                            {/*Download SVG icon from http://tabler-icons.io/i/calendar*/}
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 text-muted" width="24"
                                 height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                 fill="none"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                                <line x1="16" y1="3" x2="16" y2="7"></line>
                                <line x1="8" y1="3" x2="8" y2="7"></line>
                                <line x1="4" y1="11" x2="20" y2="11"></line>
                                <line x1="11" y1="15" x2="12" y2="15"></line>
                                <line x1="12" y1="15" x2="12" y2="18"></line>
                            </svg>
                            Birth date: <strong>{userInfo && formatDate(userInfo.birthDate)}</strong>
                        </div>
                        <div className="mb-2">
                            {/*Download SVG icon from http://tabler-icons.io/i/map-pin*/}
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 text-muted" width="24"
                                 height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                 fill="none"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="11" r="3"></circle>
                                <path
                                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                            </svg>
                            From: <strong><span className="flag flag-country-si"></span>
                            {userInfo && userInfo.birthLocation}</strong>
                        </div>
                        <div className="mb-2">
                            {/*Download SVG icon from http://tabler-icons.io/i/home*/}
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 text-muted" width="24"
                                 height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                 fill="none"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                            </svg>
                            Lives in: <strong>{userInfo && userInfo.location}</strong>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-2">
                            {/*Download SVG icon from http://tabler-icons.io/i/book*/}
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 text-muted" width="24"
                                 height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                 fill="none"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                                <line x1="3" y1="6" x2="3" y2="19"></line>
                                <line x1="12" y1="6" x2="12" y2="19"></line>
                                <line x1="21" y1="6" x2="21" y2="19"></line>
                            </svg>
                            Went to: <strong>{userInfo && userInfo.study}</strong>
                        </div>
                        <div className="mb-2">
                            {/*Download SVG icon from http://tabler-icons.io/i/briefcase*/}
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 text-muted" width="24"
                                 height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                 fill="none"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="3" y="7" width="18" height="13" rx="2"></rect>
                                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="12" y1="12" x2="12" y2="12.01"></line>
                                <path d="M3 13a20 20 0 0 0 18 0"></path>
                            </svg>
                            Worked at: <strong>{userInfo && userInfo.work}</strong>
                        </div>
                        <div>
                            {/*Download SVG icon from http://tabler-icons.io/i/clock*/}
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 text-muted" width="24"
                                 height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                 fill="none"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="12" r="9"></circle>
                                <polyline points="12 7 12 12 15 15"></polyline>
                            </svg>
                            Time zone: <strong>{userInfo && userInfo.timeZone}</strong>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>About:</h4>
                    <p>
                        {userInfo && userInfo.description}
                    </p>
                </div>
            </div>}
            {(isUserInfoFetching || isError) && <DescriptionPlaceHolder/>}
        </>
    );
};

function formatDate(date) {
    if(!date) return "";
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

export default AddictionalProfileInfoCard;