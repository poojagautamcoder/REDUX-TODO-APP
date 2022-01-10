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
} from "../actions/index";

export function* Todos(todo) {
  try {
    if (todo) {
      yield put(getSubmitSuccess(todo.payload));
    } else {
      yield put(getSubmitError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(getSubmitError({ error: "Data not fetched" }));
  }
}

export function* TodoFilter(status) {
  try {
    if (status) {
      yield put(getFilterSuccess(status.payload));
    } else {
      yield put(getFilterError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(getFilterError({ error: "Data not fetched" }));
  }
}

export function* TodoChecked(status) {
  try {
    if (status) {
      yield put(getFormCheckedSuccess(status.payload));
    } else {
      yield put(getFormCheckedError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(getFormCheckedError({ error: "Data not fetched" }));
  }
}

export function* TodoEdit(edit) {
  try {
    if (edit) {
      yield put(getFormEditSuccess(edit.payload));
    } else {
      yield put(getFormEditError({ error: "Data not fetched" }));
    }
  } catch (error) {
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
    yield put(getChangeEditError({ error: "Data not fetched" }));
  }
}
