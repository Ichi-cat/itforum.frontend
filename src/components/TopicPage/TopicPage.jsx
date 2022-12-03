import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {stateFromMarkdown} from 'draft-js-import-markdown';
import { topicAPI } from "../../services/topicApi";
import {EditorState, Editor as DraftEditor} from "draft-js";

const TopicPage = (props) => {
    const isAuthorized = useSelector((state) => state.auth.isAuth);
    const accessToken = useSelector((state) => state.auth.token);
    let topicId = useParams().topicId?.toString();
    console.log(topicId);
    const { data: topicInfo, isFetching: isUserInfoFetching, isError, error } = topicAPI.useFetchTopicDetailsQuery(topicId, {skip: !topicId});
    let contentState = (!isUserInfoFetching&&!isError)?stateFromMarkdown(topicInfo.content):EditorState.createEmpty();

    return (
        <div className="container">
            <div className="col-md-12">
                <div className="row justify-content-md-center">
                    <div className="card mt-3">
                        <div className="card-header">
                            <div>
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <span className="avatar" style={{ "backgroundImage": "url(./static/avatars/003m.jpg)" }}></span>
                                    </div>
                                    <div className="col">
                                        <div className="card-title">Dunn Slane</div>
                                        <div className="card-subtitle">Research Nurse</div>
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
                            <div className="divide-y">
                                <div>
                                <DraftEditor readOnly={true} editorState={contentState}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopicPage;