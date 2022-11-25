import ProfileCard from "./ProfileCard/ProfileCard";
import TopicItem from "./TopicItem/TopicItem";
import {topicAPI} from "../../services/topicApi";
import {useSelector} from "react-redux";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import Sorting from "../common/Sorting/Sorting";

const TopicList = () => {
    const [sortList, setSortList] = useState([
        {value: "0", title: "By Date"},
        {value: "1", title: "By Date Descending"},
        {value: "2", title: "By Likes"}
    ]);
    const isAuthorized = useSelector((state) => state.auth.isAuth);
    const [sort, setSort] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    let currentPage = +searchParams.get("page");
    if(!currentPage) currentPage = 1;
    const pageSize = 5;
    const accessToken = useSelector(state => state.auth.token);
    const {data: topics, isFetching, refetch} = topicAPI.useFetchAllTopicsQuery({accessToken, page: currentPage, pageSize, sort});
    return (
        <div className="container-xl">
            <button className="btn" onClick={() => refetch()}>Refresh</button>
            <div className="row mt-5 justify-content-md-center">
                <div className="col-lg-2 col-md-8 col-sm-12">
                    {isAuthorized&&<ProfileCard/>}
                </div>
                <div className="col-lg-7 col-md-8 col-sm-12">
                        <div className="mb-3">
                            <Sorting sortingList={sortList} initialSort={sortList[0]} onSortInput={setSort} />
                        </div>
                    <div>
                        <Paginator pagesCount={topics?topics.pageCount : 1}/>
                    </div>
                    <div>
                        {!isFetching && topics && topics.topics.map(topic => <TopicItem topic={topic} key={topic.id}/>)}
                    </div>
                </div>
                <div className="col-lg-2 col-md-8 col-sm-12">
                    {/*<LastViewedCard/>*/}
                </div>
            </div>
            {isFetching &&
            <div>Fetching...</div>}
        </div>
    );
}

export default TopicList;