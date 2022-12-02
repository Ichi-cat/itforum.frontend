import React from 'react';

const SecuritySettings = () => {
    return (
        <div>
            <div className="card-body">
                <h3 className="card-title mt-4">Password</h3>
                <p className="card-subtitle">You can set a permanent password if you don't want
                    to use temporary login codes.</p>
                <div>
                    <a href="#" className="btn">
                        Set new password
                    </a>
                </div>
            </div>
            <div className="card-body">
                <h3 className="card-title mt-4">Two-factor authentication(In developing)</h3>
                <p className="card-subtitle">You can enable two-factor authentication to add an
                    extra layer of security to your account.</p>
                <div>
                    <button disabled href="#" className="btn" >
                        Enable two-factor authentication
                    </button>
                </div>
            </div>

        </div>
    );
};

export default SecuritySettings;