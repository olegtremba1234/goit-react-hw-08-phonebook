import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, fetchCurrentUser } from './authOperations';

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
};

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(register.fulfilled,(state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        })
        .addCase(
            login.fulfilled,(state, {payload}) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            },
        )
        .addCase(

            logout.fulfilled,(state) => {
                state.user = {name: null, email: null};
                state.token = null;
                state.isLoggedIn = false;
            },
        )
        .addCase(
            fetchCurrentUser.fulfilled,(state, {payload}) => {
                state.user = payload.uer;
                state.isLoggedIn = true;
            },
        )
    },
});