import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: customFetchBase,
    endpoints: (build) => ({
        getUserList: build.query({
            query: ({page, pageSize, sort}) => ({
                url: '/User',
                params: {
                    page,
                    pageSize,
                    sort
                }
            }),
            providesTags: result => ['User']
        }),
        getUserInformation: build.query({
            query: () => ({
                url: '/User/info',
            }),
            providesTags: result => ['User']
        }),
        getFullUserInformation: build.query({
            query: ({profileId}) => ({
                url: `/User/FullInfo/${(profileId?profileId:'')}`,
            }),
            providesTags: result => ['User']
        }),
        updateUserInfo: build.mutation({
            query: ({userInfo}) => ({
                url: '/User',
                method: "PUT",
                body: userInfo
            }),
            invalidatesTags: ['User']
        }),
        setUserAvatar: build.mutation({
            query: ({formData}) => ({
                url: '/User/Upload',
                method: "POST",
                body: formData
            }),
            invalidatesTags: ['User']
        }),
        changeEmail: build.mutation({
            query: ({accessToken, email}) => ({
                url: '/Auth/ChangeEmail',
                method: 'PUT',
                headers: {
                    "authorization": `Bearer ${accessToken}`
                },
                body: {email}
            }),
            invalidatesTags: ['User']
        }),
        changePassword: build.mutation({
            query: ({oldPassword, newPassword}) => ({
                url: '/Auth/ChangePassword',
                method: 'PUT',
                body: {oldPassword, newPassword}
            }),
        }),
    })
});
