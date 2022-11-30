import TagItem from "./TagItem/TagItem";
import {useSelector} from "react-redux";
import Paginator from "../common/Paginator/Paginator";
import {tagApi} from "../../services/tagApi";
import {useSearchParams} from "react-router-dom";
import {useState} from "react";
import Sorting from "../common/Sorting/Sorting";
import ProfileCard from "../TopicList/ProfileCard/ProfileCard";

const TagList = () => {
    const isAuthorized = useSelector((state) => state.auth.isAuth);
    const [sortList, setSortList] = useState([
        {value: "0", title: "Ascending"},
        {value: "1", title: "Descending"},
        {value: "2", title: "By Popularity"}
    ]);
    const [sort, setSort] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    let currentPage = +searchParams.get("page");
    if (!currentPage) currentPage = 1;
    const pageSize = 12;
    const {data: tags, isFetching, refetch} = tagApi.useFetchAllTagsQuery({
        page: currentPage,
        pageSize,
        sort
    });
    return (
        <div className="container-xl">
            <div className="row justify-content-md-center">
                <div className="mt-3 col-lg-3 col-md-8 col-sm-12">
                    {isAuthorized&&<ProfileCard/>}
                </div>
                <div className="mt-3 col-lg-9 col-md-8 col-sm-12">
                    <div className="row">
                        <div className="col-6"><Paginator pagesCount={tags?tags.pageCount : 1}/></div>
                        <div className="col-6">
                            <Sorting sortingList={sortList} initialSort={sortList[0]} onSortInput={setSort}/>
                        </div>

                    </div>
                    {!isFetching &&
                        <div className="row justify-content-md-center">
                            <div className="col-lg-12 col-md-8 col-sm-12">
                                <div className="row">
                                    {tags && tags.tags.map(tag => <TagItem tag={tag} key={tag.name}/>)}
                                </div>
                            </div>
                        </div>}
                    {isFetching &&
                        <div>Fetching...</div>}
                </div>
            </div>
            {/*<button className="btn" onClick={() => refetch()}>Refresh</button>*/}
        </div>
    );
}

export default TagList;