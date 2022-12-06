import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { stateFromMarkdown } from 'draft-js-import-markdown';
import { topicAPI } from "../../services/topicApi";
import { userAPI } from "../../services/userApi";
import { EditorState, Editor as DraftEditor, ContentState } from "draft-js";
import { useState } from "react";
import { useEffect } from "react";

const TopicPage = (props) => {
    const isAuthorized = useSelector((state) => state.auth.isAuth);
    const accessToken = useSelector((state) => state.auth.token);
    let topicId = useParams().topicId?.toString();
    const { data: topicInfo, isFetching: isTopicInfoFetching, isError, error } = topicAPI.useFetchTopicDetailsQuery(topicId, { skip: !topicId });
    const { data: userInfo, isFetching: isUserInfoFetching, isFetching, isUserError, refetch } = userAPI.useGetFullUserInformationQuery({ profileId: topicInfo?.userId }, { skip: (!isTopicInfoFetching && !isError) });
    (!isUserInfoFetching && !isUserError) && console.log(userInfo);
    let contentState = (!isTopicInfoFetching && !isError) ? EditorState.createWithContent(stateFromMarkdown(topicInfo.content)) : EditorState.createEmpty();
    console.log(topicInfo);
    //const [isLiked, setIsLiked] = useState(topicInfo.isSubscribed);
    return (
        <div className="container">
            <div className="col-md-10">
                <div className="row justify-content-md-center">
                    <div className="card mt-3">
                        <div className="card-header">
                            <div>
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <span className="avatar" style={{ "backgroundImage": `url(${(!isUserInfoFetching && !isUserError) && userInfo.avatar})` }}></span>
                                    </div>
                                    <div className="col">
                                        <div className="card-title">{(!isUserInfoFetching && !isUserError) && userInfo.userName}</div>
                                        {/* <div className="card-subtitle">Research Nurse</div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="card-actions">
                                <div className="dropdown">
                                    <a href="#" className="btn-action dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="19" r="1"></circle><circle cx="12" cy="5" r="1"></circle></svg>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item" href="#">Edit user</a>
                                        <a className="dropdown-item" href="#">Change permissions</a>
                                        <a className="dropdown-item text-danger" href="#">Delete user</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div><h1>{(!isTopicInfoFetching && !isError) && topicInfo.name}</h1></div>
                            <div>
                                <DraftEditor readOnly={true} editorState={contentState} />
                            </div>
                        </div>
                        <div className="card-footer">

                            {(!isTopicInfoFetching && !isError) && <div>
                                {/* Place for marks*/}
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                {/* Place for tags*/}
            </div>
        </div>
    );
}

export default TopicPage;