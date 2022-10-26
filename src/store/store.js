import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {topicAPI} from "../services/topicApi";


const rootReducer = combineReducers({
    [topicAPI.reducerPath]: topicAPI.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(topicAPI.middleware)
});