import {serverUrl} from "../config";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const token = "test";

export const subscribeAPI = createApi({
    reducerPath: 'subscribeAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: serverUrl, prepareHeaders: (headers) => {

            return headers;
        }
    }),
    endpoints: (build) => ({
        subscribe: build.mutation({
            query: ({accessToken, id}) => ({
                url: '/User/Subscribe',
                method: "PUT",
                headers: {
                    "authorization": `Bearer ${accessToken}`
                },
                params: {
                    userId: id
                }
            }),
            invalidatesTags: ['Subscriptions']
        }),
        unsubscribe: build.mutation({
            query: ({accessToken, id}) => ({
                url: '/User/Unsubscribe',
                method: "PUT",
                headers: {
                    "authorization": `Bearer ${accessToken}`
                },
                params: {
                    userId: id
                }
            }),
            invalidatesTags: ['Subscriptions']
        }),
        fetchAllTopicsBySubscriptions: build.query({
            query: ({accessToken, page, pageSize, sort}) => ({
                url: '/topic/BySubscriptions',
                params: {
                    page,
                    pageSize,
                    sort
                },
                headers: {
                    "authorization": `Bearer ${accessToken}`
                }
            }),
            providesTags: result => ['Subscriptions']
            // transformResponse: (response, meta, arg) => response.data
        }),
    })
});
