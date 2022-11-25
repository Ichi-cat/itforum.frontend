import React from 'react';
import {Link, useSearchParams} from "react-router-dom";

const Paginator = ({pagesCount = 1}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    let currentPage = Number(searchParams.get("page"));
    if(!currentPage) {
        currentPage = 1;
        searchParams.append("page", 1);
    }
    const pages = [1];
    const startPage = (currentPage>5? (currentPage - 4): 2)
    const endPage = (((currentPage+5)>pagesCount)?pagesCount:(currentPage + 5))
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }
    const generateLink = (p) => {
        return "?" + searchParams.toString().replace(`page=${currentPage}`, `page=${p}`);
    }
    return (
        <ul className="pagination ">
            <li className={`page-item ${currentPage==1?"disabled":""}`}>
                <Link to={generateLink(currentPage-1)} className="page-link" tabIndex="-1" aria-disabled="true">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                         viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="15 6 9 12 15 18"></polyline>
                    </svg>
                </Link>
            </li>
            {pages.map(p => <li className="page-item"><Link to={generateLink(p)} className={"page-link " + (currentPage==p?"active":"")} key={p}>{p}</Link></li>)}
            <li className={`page-item ${currentPage==pagesCount?"disabled":""}`}>
                <Link className="page-link" to={generateLink(currentPage+1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                         viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="9 6 15 12 9 18"></polyline>
                    </svg>
                </Link>
            </li>
        </ul>
    );
};

export default Paginator;