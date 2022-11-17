import React from 'react';
import {Link} from "react-router-dom";

const ListPlaceHolder = () => {
    return (
        <div className="card placeholder-glow">
            <div className="card-header">
                <div className="card-title placeholder col-12"></div>
            </div>
            <div className="list-group list-group-flush">
                <div className="list-group-item list-group-item-action">
                    <div className="placeholder col-12"></div>
                </div>
                <div className="list-group-item list-group-item-action">
                    <div className="placeholder col-12"></div>
                </div>
                <div className="list-group-item list-group-item-action">
                    <div className="placeholder col-12"></div>
                </div>
                <div className="list-group-item list-group-item-action">
                    <div className="placeholder col-12"></div>
                </div>
                <div className="list-group-item list-group-item-action">
                    <div className="placeholder col-12"></div>
                </div>
            </div>
        </div>
    );
};

export default ListPlaceHolder;