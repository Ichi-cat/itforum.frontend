import React, {useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {topicAPI} from "../../services/topicApi";
import TopicItem from "../TopicList/TopicItem/TopicItem";
import {useSelector} from "react-redux";
import ProfileCard from "../TopicList/ProfileCard/ProfileCard";
import Sorting from "../common/Sorting/Sorting";
import Paginator from "../common/Paginator/Paginator";
import LastViewedCard from "../TopicList/LastViewedCard/LastViewedCard";

const TopicListByTag = () => {
    const [sortList, setSortList] = useState([
        {value: "0", title: "By Date"},
        {value: "1", title: "By Date Descending"},
        {value: "2", title: "By Likes"}
    ]);

    const [searchParams, setSearchParams] = useSearchParams();
    const [sort, setSort] = useState(0);
    const tagName = useParams().tag.toString();
    let currentPage = +searchParams.get("page");
    if(!currentPage) currentPage = 1;
    const pageSize = 5;
    const accessToken = useSelector(state => state.auth.token);
    const {data: topics, isFetching, refetch} = topicAPI.useFetchAllTopicsQuery({accessToken, page: currentPage, pageSize, sort});
    return (
        <div className="container-xl">
            <div className="row mt-5 justify-content-md-center">
                <div className="col-lg-2 col-md-8 col-sm-12"></div>
                <div className="col-lg-7 col-md-8 col-sm-12"><h1>
                    #{tagName}
                </h1></div>
                <div className="col-lg-2 col-md-8 col-sm-12">
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-lg-2 col-md-8 col-sm-12">
                </div>
                <div className="col-lg-7 col-md-8 col-sm-12">
                    <div className="mb-3">
                        <Sorting sortingList={sortList} initialSort={sortList[0]} onSortInput={setSort} />
                    </div>
                    <div>
                        <Paginator/>
                    </div>
                    <div>
                        {!isFetching && topics && topics.topics.map(topic => <TopicItem topic={topic} key={topic.id}/>)}
                    </div>
                </div>
                <div className="col-lg-2 col-md-8 col-sm-12">
                </div>
            </div>
            {isFetching &&
                <div>Fetching...</div>}
        </div>
    );
};

export default TopicListByTag;