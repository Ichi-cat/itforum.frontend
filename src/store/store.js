import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {topicAPI} from "../services/topicApi";
import {tagApi} from "../services/tagApi";
import {authAPI} from "../services/authApi";


const rootReducer = combineReducers({
    [topicAPI.reducerPath]: topicAPI.reducer,
    [tagApi.reducerPath]:tagApi.reducer,
    [authAPI.reducerPath]: authAPI.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(topicAPI.middleware)
            .concat(tagApi.middleware)
            .concat(authAPI.middleware)
});