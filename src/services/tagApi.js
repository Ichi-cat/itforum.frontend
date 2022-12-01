import {createApi} from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const tagApi = createApi({
    reducerPath: 'tagApi',
    baseQuery: customFetchBase,
    endpoints: (build) => ({
        fetchAllTags: build.query({
            query: ({page, pageSize, sort}) => ({
                url: '/tag',
                params: {
                    page,
                    pageSize,
                    sort
                },
            }),
        }),
        fetchTopicDetails: build.query({
            query: (id) => ({
                url: `/tag/${id}`
            })
        })
    })
});