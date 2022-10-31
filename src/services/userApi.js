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
                }
            })
        }),
    })
});
