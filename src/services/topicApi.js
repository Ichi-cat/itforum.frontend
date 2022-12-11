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
            }),
            providesTags: result=>[`Topic`]
        }),
        setTopic: build.mutation({
            query: ({accessToken, name, content, attachmentsId, tagsNames}) => ({
                url: '/Topic',
                method: "POST",
                headers: {
                    "authorization": `Bearer ${accessToken}`
                },
                body:{
                    name,
                    content,
                    attachmentsId,
                    tagsNames
                }
            }),
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
        }),
        setMark:build.mutation({
            query: ({topicId, mark}) => ({
                url: '/Mark',
                method: "PUT",
                body: {
                    "topicId":topicId,
                    "isLiked":mark
                },
            }),
            invalidatesTags:[`Topic`]
        })
    })
});
