import { createSlice } from '@reduxjs/toolkit'
import {authAPI} from "../../services/authApi";

const initialState = {
    isAuth: false,
    username: "",
    token: ""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            state.isAuth = false;
            state.token = "";
            localStorage.removeItem("token");
        },
        setToken: (state, action) => {
            state.token = action.payload;
            state.isAuth = true;
            localStorage.setItem("token", action.payload)
        },
        setUserInformation: (state, action) => {
            state.username = action.payload.username;
            state.isAuth = true;
        },
    },
})


export const { logOut, setToken, setUserInformation } = authSlice.actions

export default authSlice.reducer