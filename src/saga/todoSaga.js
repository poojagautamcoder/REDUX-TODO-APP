import { put } from "@redux-saga/core/effects";
import {
  getSubmitSuccess,
  getSubmitError,
  getFilterSuccess,
  getFilterError,
  getFormCheckedSuccess,
  getFormCheckedError,
  getFormEditSuccess,
  getFormEditError,
  getFormUpdateEditSuccess,
  getFormUpdateEditError,
  getDeleteSuccess,
  getDeleteError,
  getChangeEditSuccess,
  getChangeEditError,
  getFilteredTodoSuccess,
  getFilteredTodoError
} from "../actions/index";

export function* Todos(todo) {
  try {
    if (todo) {
      yield put(getSubmitSuccess(todo.payload));
    } else {
      yield put(getSubmitError({ error: "Data not fetched" }));
    }
  } catch (error) {
    console.log(error, "error");
    yield put(getSubmitError({ error: "Data not fetched" }));
  }
}

export function* TodoFilter(status) {
  console.log(status,  "status");
  try {
    if (status) {
      yield put(getFilterSuccess(status.payload));
    } else {
      yield put(getFilterError({ error: "Data not fetched" }));
    }
  } catch (error) {
    console.log (error, "filter")
    yield put(getFilterError({ error: "Data not fetched" }));
  }
}

export function* TodoChecked(status) {
  console.log(status, "todo");
  try {
    if (status) {
      console.log(status.payload, "statuscheck");
      yield put(getFormCheckedSuccess(status.payload));
    } else {
      yield put(getFormCheckedError({ error: "Data not fetched" }));
    }
  } catch (error) {
    console.log((error, "error"));
    yield put(getFormCheckedError({ error: "Data not fetched" }));
  }
}

export function* TodoEdit(edit) {
  console.log(edit, "type");
  try {
    if (edit) {
      yield put(getFormEditSuccess(edit.payload));
    } else {
      yield put(getFormEditError({ error: "Data not fetched" }));
    }
  } catch (error) {
    console.log(error, "edited value");
    yield put(getFormEditError({ error: "Data not fetched" }));
  }
}

export function* TodoUpdate(todo) {
  try {
    if (todo) {
      yield put(getFormUpdateEditSuccess(todo.payload));
    } else {
      yield put(getFormUpdateEditError({ error: "Data not fetched" }));
    }
  } catch (error) {
    console.log(error, "update");
    yield put(getFormUpdateEditError({ error: "Data not fetched" }));
  }
}

export function* TodoDelete(data) {
  try {
    if (data.payload) {
      yield put(getDeleteSuccess(data.payload));
    } else {
      yield put(getDeleteError({ error: "Data not fetched" }));
    }
  } catch (error) {
    console.log((error, "error"));
    yield put(getDeleteError({ error: "Data not fetched" }));
  }
}

export function* todoChange(editValue) {
  try {
    if (editValue.payload) {
      yield put(getChangeEditSuccess(editValue.payload));
    } else {
      yield put(getChangeEditError({ error: "Data not fetched" }));
    }
  } catch (error) {
    console.log((error, "error"));
    yield put(getChangeEditError({ error: "Data not fetched" }));
  }
}

export function* finalTodo(finalTodo) {
  try {
    if (finalTodo.payload) {
      yield put(getFilteredTodoSuccess(finalTodo.payload));
    } else {
      yield put(getFilteredTodoError({ error: "Data not fetched" }));
    }
  } catch (error) {
    console.log((error, "error"));
    yield put(getFilteredTodoError({ error: "Data not fetched" }));
  }
}
