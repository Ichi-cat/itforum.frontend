import {useNavigate} from "react-router-dom";
import React from "react";

const TagItem = ({tag}) => {
    const details = "Some temp content";
    const navigate = useNavigate();
    debugger
    return (
        <div onClick={() => navigate(`/bytag/${tag.name}`)} className="col-lg-3 card mx-1 center-block mb-3">
            <div className="card-header">
                <h3 className="card-title cursor-pointer">{tag.name}</h3>
            </div>
        </div>
    );
};
export default TagItem;