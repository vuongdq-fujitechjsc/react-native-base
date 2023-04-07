import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IAPIResponse } from "src/models/IAPIResponse";
import { ListRequest } from "src/models/IPagingationResponse";
import { ListResponse } from "src/models/IPagingationResponse";
import { ReduxContants } from "src/constants/reduxContant";
import { RootState } from "src/store/store";
import { StudentResponse } from "src/models/IStudentResponse";

export interface StudentState {
    isLoading: boolean;
    list: Array<ListResponse<StudentResponse>>;
    filter: ListRequest;
}

const _initialState: StudentState = {
    isLoading: false,
    list: [],
    filter: {
        _page: 1,
        _limit: 10,
    }
}

const _studentSlice = createSlice({
    name: ReduxContants.SLICE_STUDENT,
    initialState: _initialState,
    reducers: {
        getStudentList(state, action: PayloadAction<ListRequest>) {
            state.isLoading = true;
        },
        refreshStudentList(state) {
            state.list.splice(0, state.list.length)
            state.filter = {
                _page: 1,
                _limit: 10,
            }
        },
        getStudentListSuccess(state, action: PayloadAction<ListResponse<StudentResponse>>) {
            state.isLoading = false
            state.list = [...state.list, ...action.payload.data]
        },
        getStudentListFailed(state) {
            state.isLoading = false
        },
        setStudentFilter(state, action: PayloadAction<ListRequest>) {
            state.filter = action.payload
        }
    }
})

export const selectStudentIsLoading = (state: RootState) => state.student.isLoading;
export const selectStudentList = (state: RootState) => state.student.list;
export const selectStudentFilter = (state: RootState) => state.student.filter;

export const studentActions = _studentSlice.actions;

const studentReducer = _studentSlice.reducer;
export default studentReducer;