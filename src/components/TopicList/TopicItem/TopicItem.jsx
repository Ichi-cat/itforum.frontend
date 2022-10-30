import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const TopicItem = ({topic}) => {
    const details = "Some temp content";
    const navigate = useNavigate();
    return (
            <div onClick={() => navigate(`details/${topic.id}`)} className="card w-100 center-block mb-3">
                <div className="card-header">
                    <h3 className="card-title cursor-pointer">{topic.name}</h3>
                    <div className="card-actions btn-actions">
                        <a href="#" className="btn-action">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                 viewBox="0 0 24 24"
                                 stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                 stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
                                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
                            </svg>
                        </a>
                        <a href="#" className="btn-action">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                 viewBox="0 0 24 24"
                                 stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                 stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="6 15 12 9 18 15"></polyline>
                            </svg>
                        </a>
                        <a href="#" className="btn-action">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                 viewBox="0 0 24 24"
                                 stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                 stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="12" cy="19" r="1"></circle>
                                <circle cx="12" cy="5" r="1"></circle>
                            </svg>
                        </a>
                        <a href="#" className="btn-action">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                 viewBox="0 0 24 24"
                                 stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                 stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="card-body p-0">
                    <div className="col-12 p-3 markdown mh-100">
                        <p>{details}</p>
                    </div>

                </div>
            </div>
    );
};

export default TopicItem;