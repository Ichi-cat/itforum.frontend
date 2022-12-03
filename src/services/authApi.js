import {serverUrl} from "../config";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


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
        }),
        signUp: build.mutation({
            query: ({userName, password, confirmPassword, email}) => ({
                url: '/Auth/SignUp',
                method: 'POST',
                body: {userName, password, confirmPassword, email}
            }),
        }),
        getToken: build.mutation({
            query: ({email, redirectUri}) => ({
                url: '/Auth/GetToken',
                method: 'POST',
                body: {email, redirectUri}
            }),
        }),
        resetPassword: build.mutation({
            query: ({token, email, password, confirmPassword}) => ({
                url: '/Auth/ResetPassword',
                method: 'PUT',
                body: {token, email, password, confirmPassword}
            }),
        }),
        facebookAuthentication: build.mutation({
            query: (accessToken) => ({
                url: '/Auth/SignInFacebook/facebook',
                method: 'POST',
                params: {
                    token: accessToken
                },
                body: {}
            })
        }),
        githubAuthentication: build.mutation({
            query: (code) => ({
                url: '/Auth/SignInGithub/github',
                method: 'POST',
                params: {
                    code: code
                },
                body: {}
            })
        })
    })
});
