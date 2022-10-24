import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './reducers/topicsReducer'

const rootReducer = combineReducers({
    counter: counterReducer
});

export const store = configureStore({
    reducer: rootReducer,
});