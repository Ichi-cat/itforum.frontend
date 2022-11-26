import React, {useState} from 'react';
import {Link, useParams, useSearchParams} from "react-router-dom";
import ListPlaceHolder from "../placeholders/ListPlaceHolder/ListPlaceHolder";
import {markAPI} from "../../services/markApi";
import {useSelector} from "react-redux";
import Sorting from "../common/Sorting/Sorting";
import {topicAPI} from "../../services/topicApi";
import TopicItem from "../TopicList/TopicItem/TopicItem";
import TopicPlaceHolder from "../placeholders/TopicPlaceHolder/TopicPlaceHolder";
import Paginator from "../common/Paginator/Paginator";



const UsersTopicsCard = () => {
    const [sortList, setSortList] = useState([
        {value: "0", title: "By Date"},
        {value: "1", title: "By Date Descending"},
        {value: "2", title: "By Likes"}
    ]);
    const [sort, setSort] = useState(0);
    const accessToken = useSelector(state => state.auth.token);
    const [searchParams, setSearchParams] = useSearchParams();
    let currentPage = +searchParams.get("page");
    if(!currentPage) currentPage = 1;
    const pageSize = 5;
    let profileId = useParams().profileId?.toString();
    const {data, isFetching: isTopicsPostsLoading, isError} =  topicAPI.useFetchUsersTopicsQuery( { accessToken,profileId, page: currentPage, pageSize: pageSize, sort, UserId: profileId } );
    return (
        <div>
            <Sorting sortingList={sortList} initialSort={sortList[0]} onSortInput={setSort} />
            <br/>
            <Paginator pagesCount={data?data.pageCount : 1}/>
            {!isTopicsPostsLoading && !isError && <div className="divide-y">
                {data.topics.map(topic => <TopicItem topic={topic} key={topic.id}/>)}
                </div>}
            {isTopicsPostsLoading && <TopicPlaceHolder/>}
        </div>
    );
};

export default UsersTopicsCard;