import { ListRequest, ListResponse, PaginationParams } from "src/models/IPagingationResponse";
import { call, put, takeLatest } from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit";
import { StudentResponse } from "src/models/IStudentResponse";
import axios from "axios";
import { studentActions } from "src/reducers/studentReducer";
import studentService from "src/services/studentService";

const studentAPI = {
    getAll(): Promise<ListResponse<StudentResponse, PaginationParams>>{
        return axios.get('https://js-post-api.herokuapp.com/api/students?_page=1&_limit=25');
    },
}

function* handleGetStudentList(payload: PayloadAction<ListRequest>){
    try {
        const response: ListResponse<StudentResponse, PaginationParams> = yield call(studentAPI.getAll);
        console.log(response)
        yield put(studentActions.getStudentListSuccess(response));
    } catch (error) {
        console.log(error)
        yield put(studentActions.getStudentListFailed());
    }
}

export default function* studentSaga(){
    yield takeLatest(studentActions.getStudentList.type, handleGetStudentList);
}