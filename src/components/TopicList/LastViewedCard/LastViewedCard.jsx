import React from 'react';

const LastViewedCard = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Last viewed</h3>
            </div>
            <div className="list-group list-group-flush list-group-hoverable">
                <div className="list-group-item">
                    <div className="row align-items-center">
                        <div className="col-auto"><span className="badge bg-red"></span></div>
                        <div className="col-auto">
                            <a href="#">
                                <span className="avatar"></span>
                            </a>
                        </div>
                        <div className="col text-truncate">
                            <a href="#" className="text-reset d-block">Misha</a>
                            <div className="d-block text-muted text-truncate mt-n1">Liked your topic
                            </div>
                        </div>
                        <div className="col-auto">
                            <a href="#"
                               className="list-group-item-actions">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon text-muted"
                                     width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                     stroke="currentColor" fill="none" stroke-linecap="round"
                                     stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="list-group-item">
                    <div className="row align-items-center">
                        <div className="col-auto"><span className="badge"></span></div>
                        <div className="col-auto">
                            <a href="#">
                                <span className="avatar">IM</span>
                            </a>
                        </div>
                        <div className="col text-truncate">
                            <a href="#" className="text-reset d-block">Ivan</a>
                            <div className="d-block text-muted text-truncate mt-n1">Subscribed on you
                            </div>
                        </div>
                        <div className="col-auto">
                            <a href="#"
                               className="list-group-item-actions">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon text-muted"
                                     width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                     stroke="currentColor" fill="none" stroke-linecap="round"
                                     stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastViewedCard;