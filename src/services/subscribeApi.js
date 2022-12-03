import {createApi} from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const subscribeAPI = createApi({
    reducerPath: 'subscribeAPI',
    baseQuery: customFetchBase,
    endpoints: (build) => ({
        subscribe: build.mutation({
            query: ({id}) => ({
                url: '/User/Subscribe',
                method: "PUT",
                params: {
                    userId: id
                }
            }),
            invalidatesTags: ['Subscriptions']
        }),
        unsubscribe: build.mutation({
            query: ({id}) => ({
                url: '/User/Unsubscribe',
                method: "PUT",
                params: {
                    userId: id
                }
            }),
            invalidatesTags: ['Subscriptions']
        }),
        fetchAllTopicsBySubscriptions: build.query({
            query: ({page, pageSize, sort}) => ({
                url: '/topic/BySubscriptions',
                params: {
                    page,
                    pageSize,
                    sort
                },
            }),
            providesTags: result => ['Subscriptions']
        }),
    })
});
