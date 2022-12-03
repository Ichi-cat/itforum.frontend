import {
    fetchBaseQuery
} from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
import {serverUrl} from "../config";
import {logOut, setToken} from "../store/reducers/AuthReducer";

const baseUrl = serverUrl;

// Create a new mutex
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token

        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }

        return headers
    }
});

const customFetchBase = async (args, api, extraOptions) => {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);
    if (result.error?.status==401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();

            try {
                const token = api.getState().auth.token;
                const refreshToken = localStorage.getItem("refreshToken");
                const refreshResult = await baseQuery(
                    { url: '/Auth/RefreshToken', method: "POST", body: {accessToken: token, refreshToken: refreshToken} },
                    api,
                    extraOptions
                );
                if (refreshResult.data) {
                    api.dispatch(setToken(refreshResult.data.accessToken));
                    localStorage.setItem("refreshToken", refreshResult.data.refreshToken)
                    console.log(args.headers)
                    console.log(args)
                    console.log(api)
                    args.headers = {authorization: "Bearer "+refreshResult.data.accessToken};
                    result = await baseQuery(args, api, extraOptions);
                } else {
                    window.location.href = '/SignIn';
                    api.dispatch(logOut());
                }
            } finally {
                // release must be called once the mutex should be released again.
                release();
            }
        } else {
            // wait until the mutex is available without locking it
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    }

    return result;
};

export default customFetchBase;