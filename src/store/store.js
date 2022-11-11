import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {topicAPI} from "../services/topicApi";
import {authAPI} from "../services/authApi";
import authReducer from "./reducers/AuthReducer"
import {userAPI} from "../services/userApi";

const rootReducer = combineReducers({
    [topicAPI.reducerPath]: topicAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    auth: authReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(topicAPI.middleware)
            .concat(authAPI.middleware)
            .concat(userAPI.middleware)
});