import { all } from "redux-saga/effects";
import studentSaga from "./studentSaga";

export default function* rootSaga() {
    yield all([studentSaga()]);
}