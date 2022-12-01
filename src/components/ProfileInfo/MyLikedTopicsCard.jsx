import React from 'react';
import {Link} from "react-router-dom";
import ListPlaceHolder from "../placeholders/ListPlaceHolder/ListPlaceHolder";
import {markAPI} from "../../services/markApi";
import {useSelector} from "react-redux";



const MyLikedTopicsCard = () => {
    const accessToken = useSelector(state => state.auth.token);
    const {data, isFetching: isLikedPostsLoading, isError} =  markAPI.useFetchLikedTopicsQuery( { accessToken, page: 1, pageSize: 6 } );
    return (
        <div>
            {/* if (!isLikedPostsLoading) { }*/}
            {!isLikedPostsLoading && !isError && <div className="card">
                <div className="card-header">
                    <h3 className="card-title mx-auto">My Liked Topics</h3>
                </div>
                <div className="list-group list-group-flush">

                    {data.topics.map((topic)=><Link to={`/topic/${topic.id}`} className="list-group-item list-group-item-action"
                                            aria-current="true">
                        {topic.name}
                    </Link>)}
                </div>
                <Link to="/likedPosts" className="card-btn">View all posts</Link>
            </div>}
            {isLikedPostsLoading && <ListPlaceHolder/>}
        </div>
    );
};

export default MyLikedTopicsCard;