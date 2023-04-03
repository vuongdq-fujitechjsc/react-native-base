import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ReduxContants } from "src/constants/reduxContant";

export interface AuthState {
    isLoggedIn: boolean,
    currenUser?: string | undefined
}

const initialState: AuthState = {
    isLoggedIn: false,
    currenUser: 'VuongDQ'
}

const authSlice = createSlice({
    name: ReduxContants.SLICE_AUTH,
    initialState,
    reducers: {
        login(state, action: PayloadAction<string>) {
            state.isLoggedIn = true;
        },
        logout(state, action: PayloadAction<string>) {
            state.isLoggedIn = false;
        }
    }
})

export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;

export const authActions = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;