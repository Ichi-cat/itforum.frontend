import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {topicAPI} from "../services/topicApi";
import {tagApi} from "../services/tagApi";
import {authAPI} from "../services/authApi";
import authReducer, {logOut} from "./reducers/AuthReducer"
import {userAPI} from "../services/userApi";
import {subscribeAPI} from "../services/subscribeApi";
import {markAPI} from "../services/markApi";

const rootReducer = combineReducers({
    [topicAPI.reducerPath]: topicAPI.reducer,
    [tagApi.reducerPath]:tagApi.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [subscribeAPI.reducerPath]: subscribeAPI.reducer,
    [markAPI.reducerPath]: markAPI.reducer,
    auth: authReducer
});

const rootReducerContainer = (state, action) => {
    if (logOut.match(action)) {
        state = undefined;
    }

    return rootReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducerContainer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(topicAPI.middleware)
            .concat(tagApi.middleware)
            .concat(authAPI.middleware)
            .concat(userAPI.middleware)
            .concat(subscribeAPI.middleware)
            .concat(markAPI.middleware)
});