import React from 'react';

const CardList = ({title, list}) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
            </div>
            <div className="list-group list-group-flush">
                {list.map(item => <button className="list-group-item list-group-item-action">{item}</button>)}
            </div>
        </div>
    );
};

export default CardList;