import React, {useState} from 'react';
import TopicItem from "../TopicItem/TopicItem";
import {topicAPI} from "../../../services/topicApi";
import {useSelector} from "react-redux";
import TopicPlaceHolder from "../../placeholders/TopicPlaceHolder/TopicPlaceHolder";
import Sorting from "../../common/Sorting/Sorting";
import Paginator from "../../common/Paginator/Paginator";
import {useSearchParams} from "react-router-dom";

const AllTopicsList = ({isSubscribedTopics, setIsSubscribedTopics}) => {
    const pageSize = 5;
    const [searchParams, setSearchParams] = useSearchParams();
    let currentPage = +searchParams.get("page");
    if(!currentPage) currentPage = 1;
    const [sortList, setSortList] = useState([
        {value: "0", title: "By Date"},
        {value: "1", title: "By Date Descending"},
        {value: "2", title: "By Likes"}
    ]);
    const [sort, setSort] = useState(0);
    const accessToken = useSelector(state => state.auth.token);
    const {data: topics, isFetching} = topicAPI.useFetchAllTopicsQuery({
        accessToken,
        page: currentPage,
        pageSize,
        sort
    });
    return (
        <>
            <div className="mb-3">
                <Sorting sortingList={sortList} initialSort={sortList[0]} onSortInput={setSort}/>
            </div>
            <div>
                <Paginator pagesCount={topics ? topics.pageCount : 1}/>
                <label className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" checked={isSubscribedTopics} onInput={() =>
                        setIsSubscribedTopics(!isSubscribedTopics)}/>
                    <span className="form-check-label">Show topics of subscribers</span>
                </label>
            </div>
            <div>
                {!isFetching && topics && topics.topics.map(topic => <TopicItem topic={topic} key={topic.id}/>)}
                {isFetching && <TopicPlaceHolder/>}
            </div>
        </>
    );
};

export default AllTopicsList;