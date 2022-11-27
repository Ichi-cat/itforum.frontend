import {serverUrl} from "../config";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const token = "test";

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: serverUrl, prepareHeaders: (headers) => {

            return headers;
        }
    }),
    endpoints: (build) => ({
        getUserList: build.query({
            query: ({accessToken, page, pageSize, sort}) => ({
                url: '/User',
                headers: {
                    "authorization": `Bearer ${accessToken}`
                },
                params: {
                    page,
                    pageSize,
                    sort
                }
            }),
            providesTags: result => ['User']
        }),
        getUserInformation: build.query({
            query: (accessToken) => ({
                url: '/User/info',
                headers: {
                    "authorization": `Bearer ${accessToken}`
                },
            }),
            providesTags: result => ['User']
        }),
        getFullUserInformation: build.query({
            query: ({accessToken, profileId}) => ({
                url: `/User/FullInfo/${(profileId?profileId:'')}`,
                headers: {
                    "authorization": `Bearer ${accessToken}`
                },
            }),
            providesTags: result => ['User']
        }),
        updateUserInfo: build.mutation({
            query: ({accessToken, userInfo}) => ({
                url: '/User',
                method: "PUT",
                headers: {
                    "authorization": `Bearer ${accessToken}`
                },
                body: userInfo
            }),
            invalidatesTags: ['User']
        }),
        setUserAvatar: build.mutation({
            query: ({accessToken, formData}) => ({
                url: '/User/Upload',
                method: "POST",
                headers: {

                    "authorization": `Bearer ${accessToken}`
                },
                body: formData
            }),
            invalidatesTags: ['User']
        })
    })
});
