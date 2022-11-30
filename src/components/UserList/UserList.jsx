import React, {useState} from 'react';
import Me from '../../img/20220721_143949.jpg'
import Sorting from "../common/Sorting/Sorting";
import Paginator from "../common/Paginator/Paginator";
import {userAPI} from "../../services/userApi";
import {useSelector} from "react-redux";
import UserItem from "./UserItem/UserItem";
import ProfilePlaceHolder from "../placeholders/ProfilePlaceHolder/ProfilePlaceHolder";
import {useSearchParams} from "react-router-dom";

const UserList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    let page = Number(searchParams.get("page"));
    if(!page) page = 1;
    const pageSize = 8;
    const [sortList, setSortList] = useState([
        {value: "0", title: "By Name"},
        {value: "1", title: "By Name Descending"}
    ]);
    const placeHolders = [];
    const [sort, setSort] = useState(0);
    const {data, isFetching, isLoading, refetch} = userAPI.useGetUserListQuery({page, pageSize, sort});
    for(let i=1; i<=10; i++){
        placeHolders.push(i);
    }
    return (
        <div className="container-xl">
            <div className="row row-cards mt-3">
                <div className="col-3">
                    <Sorting sortingList={sortList} onSortInput={setSort} initialSort={sortList[0]}/>
                </div>
            </div>
            <div className="row row-cards mt-2">
                {!isLoading && data?.users?.map(u => <div className="col-3"><UserItem refetch={refetch} user={u}/></div>)}
                {isLoading && placeHolders.map(n => <div className="col-3"><ProfilePlaceHolder/></div>)}
            </div>
            <div className="row row-cards mt-1">
                <div className="col-3">
                    <Paginator pagesCount={data && data.pagesCount}/>
                </div>
            </div>
        </div>
    );
};

export default UserList;