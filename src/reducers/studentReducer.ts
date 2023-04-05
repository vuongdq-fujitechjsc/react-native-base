import { ListRequest, PaginationParams } from "src/models/IPagingationResponse";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ListResponse } from "src/models/IPagingationResponse";
import { ReduxContants } from "src/constants/reduxContant";
import { RootState } from "src/store/store";
import { StudentResponse } from "src/models/IStudentResponse";

export interface StudentState {
    isLoading: boolean;
    list: StudentResponse[];
    filter: ListRequest;
    pagination: PaginationParams;
}

const _initialState: StudentState = {
    isLoading: false,
    list: [],
    filter: {
        _page: 1,
        _limit: 25,
    },
    pagination: {
        _page: 1,
        _limit: 25,
        _totalRows: 25,
    }
}

const _studentSlice = createSlice({
    name: ReduxContants.SLICE_STUDENT,
    initialState: _initialState,
    reducers: {
        getStudentList(state, action: PayloadAction<ListRequest>) {
            state.isLoading = true;
        },
        getStudentListSuccess(state, action: PayloadAction<ListResponse<StudentResponse, PaginationParams>>) {
            state.isLoading = false
            state.list = action.payload.data
            state.pagination = action.payload.pagination
        },
        getStudentListFailed(state) {
            state.isLoading = false
        },
        setStudentFilter(state, action: PayloadAction<ListRequest>){
            state.filter = action.payload
        }
        
    }
})

export const selectStudentIsLoading = (state: RootState) => state.student.isLoading;
export const selectStudentList = (state: RootState) => state.student.list;
export const selectStudentPagination = (state: RootState) => state.student.pagination;
export const selectStudentFilter = (state: RootState) => state.student.filter;

export const studentActions = _studentSlice.actions;

const studentReducer = _studentSlice.reducer;
export default studentReducer;