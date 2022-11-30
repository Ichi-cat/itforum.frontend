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
    const accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtaWhhaWxAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6Im1paGFpbCIsImp0aSI6IjY1YWE0Zjg5LWRlYmUtNGE2NS1hZWMwLWFhNjdkNmE1MTYxMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJleHAiOjE2NjkyOTg4ODgsImlzcyI6Ikl0Rm9ydW1TZXJ2ZXIiLCJhdWQiOiJJdEZvcnVtUmVhY3RDbGllbnQifQ.D_InYeC6lpJxZTrLGAYFMMCDkVwSmD9VA2dj5fBO92g`;
    //useSelector(state => state.auth.token);
    const [sort, setSort] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    let currentPage = +searchParams.get("page");
    if (!currentPage) currentPage = 1;
    const pageSize = 12;
    const {data: tags, isFetching, refetch} = tagApi.useFetchAllTagsQuery({
        accessToken,
        page: currentPage,
        pageSize,
        sort
    });
    console.log(tags);
    // const tags=[
    //     {Name:"Qwerty", Id:123},
    //     {Name:"Qwertywqes", Id: 234},
    //     {Name:"Qwertyd", Id: 345},
    //     {Name:"Qwertyg", Id:456}
    // ]
    // const isFetching=false;
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