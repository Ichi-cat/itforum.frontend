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
            })
        }),
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
            })
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
            })
        }),
        getUserInformation: build.query({
            query: (accessToken) => ({
                url: '/User/info',
                headers: {
                    "authorization": `Bearer ${accessToken}`
                },
            })
        }),
        getFullUserInformation: build.query({
            query: ({accessToken, profileId}) => ({
                url: `/User/FullInfo/${(profileId?profileId:'')}`,
                headers: {
                    "authorization": `Bearer ${accessToken}`
                },
            })
        }),
        updateUserInfo: build.mutation({
            query: ({accessToken, userInfo}) => ({
                url: '/User',
                method: "PUT",
                headers: {
                    "authorization": `Bearer ${accessToken}`
                },
                body: userInfo
            })
        }),
        setUserAvatar: build.mutation({
            query: ({accessToken, formData}) => ({
                url: '/User/Upload',
                method: "POST",
                headers: {

                    "authorization": `Bearer ${accessToken}`
                },
                body: formData
            })
        })
    })
});
