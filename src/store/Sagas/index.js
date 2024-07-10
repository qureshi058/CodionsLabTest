import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import projectSaga from "./projectSaga";

function* rootSaga() {
  yield all([authSaga(), projectSaga(),]);
}
export default rootSaga;
