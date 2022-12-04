import React from 'react';
import AccountSettings from "./AccountSettings/AccountSettings";
import AccountSettingsContainer from "./AccountSettings/AccountSettingsContainer";
import {Link} from "react-router-dom";
import SecuritySettings from "./SecuritySettings/SecuritySettings";
import SecuritySettingsContainer from "./SecuritySettings/SecuritySettingsContainer";


const SettingsForm = () => {
    const [page, setPage] = React.useState(1);

    return (
        <div>
            <div className="page-wrapper">
                <div className="page-header d-print-none">
                    <div className="container-xl">
                        <div className="row g-2 align-items-center">
                            <div className="col">
                                <h2 className="page-title">
                                    Account Settings
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-body">
                    <div className="container-xl">
                        <div className="card">
                            <div className="row g-0">
                                <div className="col-3 d-none d-md-block border-end">
                                    <div className="card-body">
                                        <h4 className="subheader">Settings</h4>
                                        <div className="list-group list-group-transparent">
                                            <button onClick={() => setPage(1)} className={page === 1 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>Account</button>
                                            <button onClick={() => setPage(2)} className={page === 2 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>Security</button>

                                        </div>
                                        <h4 className="subheader mt-4">Experience</h4>
                                        <div className="list-group list-group-transparent">
                                            <a href="#" className="list-group-item list-group-item-action">Give
                                                Feedback</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col d-flex flex-column">
                                    {page==1 &&<AccountSettingsContainer/>}
                                    {page==2 &&<SecuritySettingsContainer/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsForm;