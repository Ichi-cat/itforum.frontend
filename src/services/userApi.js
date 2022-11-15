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
        getUserInformation: build.query({
            query: (accessToken) => ({
                url: '/User',
                headers: {
                    "authorization": `Bearer ${accessToken}`
                },
            })
        }),
        getFullUserInformation: build.query({
            query: (accessToken) => ({
                url: '/User/FullInfo',
                headers: {
                    "authorization": `Bearer ${accessToken}`
                }
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
