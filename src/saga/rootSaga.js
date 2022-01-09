import * as constant from "../constant";
import { fork, all, takeLatest } from "redux-saga/effects";
import {
  Todos,
  TodoFilter,
  TodoChecked,
  TodoEdit,
  TodoUpdate,
  TodoDelete,
  todoChange,
  finalTodo,
} from "./todoSaga";

function* TodosSaga() {
  yield takeLatest(constant.GET_SUBMIT_REQUEST, Todos);
  yield takeLatest(constant.GET_DELETE_REQUEST, TodoDelete);
  yield takeLatest(constant.GET_FORM_CHECKED_REQUEST, TodoChecked);
  yield takeLatest(constant.GET_FILTER_REQUEST, TodoFilter);
  yield takeLatest(constant.GET_FORM_EDIT_REQUEST, TodoEdit);
  yield takeLatest(constant.GET_FORM_UPDATE_REQUEST, TodoUpdate);
  yield takeLatest(constant.GET_CHANGE_EDIT_REQUEST,todoChange);
  yield takeLatest(constant.GET_FILTEREDTODO_REQUEST,finalTodo);

}
export default function* rootSaga() {
  yield all([fork(TodosSaga)]);
}
