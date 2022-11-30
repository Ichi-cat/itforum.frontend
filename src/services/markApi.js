import {createApi} from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const markAPI = createApi({
    reducerPath: 'markAPI',
    baseQuery: customFetchBase,
    endpoints: (build) => ({
        fetchLikedTopics: build.query({
            query: ({page = 1, pageSize = 5}) => ({
                url: '/Mark',
                params: {
                    page : page,
                    pageSize : pageSize
                    // page: page = page
                    // params for query
                    // page,
                    // pageSize
                },
                // body: {
                //   commId: page
                // },
            }),
        })
    })
});
