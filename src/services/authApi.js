import {serverUrl} from "../config";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtaWhhaWxAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6Im1paGFpbCIsImp0aSI6IjY1YWE0Zjg5LWRlYmUtNGE2NS1hZWMwLWFhNjdkNmE1MTYxMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJleHAiOjE2NjczNTM1NDYsImlzcyI6Ikl0Rm9ydW1TZXJ2ZXIiLCJhdWQiOiJJdEZvcnVtUmVhY3RDbGllbnQifQ.tcbc9jmh5ldQapH_VOaTUtPiNC5xOFrkuGot4hsEDSM";

export const setJwtToken = (data) => {
    localStorage.setItem("token", data.data.token);
    return data;
}

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: serverUrl
    }),
    endpoints: (build) => ({
        signIn: build.mutation({
            query: ({userName, password}) => ({
                url: '/Auth/SignIn',
                method: 'POST',
                body: {userName, password}
            }),
            async onQueryStarted(
                arg,
                { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
            ) {},
            // The 2nd parameter is the destructured `MutationCacheLifecycleApi`
            async onCacheEntryAdded(
                arg,
                {
                    dispatch,
                    getState,
                    extra,
                    requestId,
                    cacheEntryRemoved,
                    cacheDataLoaded,
                    getCacheEntry,
                }
            ) {},
        }),
        facebookAuthentication: build.mutation({
            query: (accessToken) => ({
                url: '/Auth/SignInFacebook/facebook',
                method: 'POST',
                params: {
                    token: accessToken
                }
            })
        }),
        githubAuthentication: build.mutation({
            query: (code) => ({
                url: '/Auth/SignInGithub/github',
                method: 'POST',
                params: {
                    code: code
                }
            })
        })
    })
});
