import {createApi} from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const topicAPI = createApi({
    reducerPath: 'topicAPI',
    baseQuery: customFetchBase,
    endpoints: (build) => ({
        fetchAllTopics: build.query({
            query: ({page, pageSize, sort}) => ({
                url: '/topic',
                params: {
                    page,
                    pageSize,
                    sort
                },
            }),
        }),
        fetchAllTopicsByTag: build.query({
            query: ({page, pageSize, sort, tagName}) => ({
                url: '/topic/ByTag',
                params: {
                    page,
                    pageSize,
                    sort,
                    tagName
                },
            }),
            // transformResponse: (response, meta, arg) => response.data
        }),
        fetchTopicDetails: build.query({
            query: (id) => ({
                url: `/topic/${id}`
            })
        }),
        fetchUsersTopics: build.query({
            query: ({UserId, page, pageSize, sort}) => ({
                url: '/topic/ByUserId',
                params: {
                    UserId,
                    page,
                    pageSize,
                    sort
                },
            }),
        })
    })
});
