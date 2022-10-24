import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";


export const topicAPI = createApi({
    reducerPath: 'topicAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:5004/', prepareHeaders: (headers) => {
            let token = localStorage.getItem("token");
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        }}),
endpoints: (build) => ({
    fetchAllTopics: build.query({
    query: (count = 10) => ({
        url: '/topic',
        params: {
            count: count
        },
    })
}),
    fetchTopicDetails: build.query({
    query: (id) => ({
        url: `/topic/${id}`
    })
})
})
});