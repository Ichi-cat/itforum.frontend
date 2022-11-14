import React from 'react';

const TopicPlaceHolder = () => {
    return (
        <div className="card placeholder-glow">
            <div className="ratio ratio-21x9 card-img-top placeholder"></div>
            <div className="card-body">
                <div className="placeholder col-9 mb-3"></div>
                <div className="placeholder placeholder-xs col-10"></div>
                <div className="placeholder placeholder-xs col-11"></div>
                <div className="mt-3">
                    <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-4"
                       aria-hidden="true"></a>
                </div>
            </div>
        </div>
    );
};

export default TopicPlaceHolder;