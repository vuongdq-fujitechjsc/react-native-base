import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ReduxContants } from "src/constants/reduxContant";
import { RootState } from "src/store/store";

export interface AuthState {
    isLoggedIn: boolean,
    currenUser?: string | undefined
}

const initialState: AuthState = {
    isLoggedIn: false,
    currenUser: 'VuongDQ'
}

const _authSlice = createSlice({
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

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const authActions = _authSlice.actions;

const authReducer = _authSlice.reducer;
export default authReducer;