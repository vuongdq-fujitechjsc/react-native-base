import { ListRequest, ListResponse } from "src/models/IPagingationResponse";
import { call, put, takeLatest } from "redux-saga/effects";

import { IAPIResponse } from "src/models/IAPIResponse";
import { PayloadAction } from "@reduxjs/toolkit";
import { StudentResponse } from "src/models/IStudentResponse";
import { studentActions } from "src/reducers/studentReducer";
import studentService from "src/services/studentService";

function* handleGetStudentList(action: PayloadAction<ListRequest>) {
    try {
        const response: ListResponse<StudentResponse> = yield call(studentService.getAll, action.payload)
        yield put(studentActions.getStudentListSuccess(response.data));
    } catch (error) {
        yield put(studentActions.getStudentListFailed());
    }
}

export default function* studentSaga() {
    yield takeLatest(studentActions.getStudentList.type, handleGetStudentList);
}