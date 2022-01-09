// import { createAction } from "redux-actions";
import { createAction } from "redux-actions";
import * as constant from "../constant";

export const getSubmitReruest = createAction(constant.GET_SUBMIT_REQUEST);
export const getSubmitSuccess = createAction(constant.GET_SUBMIT_SUCCESS);
export const getSubmitError = createAction(constant.GET_SUBMIT_ERROR);

export const getDeleteReruest = createAction(constant.GET_DELETE_REQUEST);
export const getDeleteSuccess = createAction(constant.GET_DELETE_SUCCESS);
export const getDeleteError = createAction(constant.GET_DELETE_ERROR);

export const getFormCheckedReruest = createAction(
  constant.GET_FORM_CHECKED_REQUEST
);
export const getFormCheckedSuccess = createAction(
  constant.GET_FORM_CHECKED_SUCCESS
);
export const getFormCheckedError = createAction(
  constant.GET_FORM_CHECKED_ERROR
);

export const getFilterReruest = createAction(constant.GET_FILTER_REQUEST);
export const getFilterSuccess = createAction(constant.GET_FILTER_SUCCESS);
export const getFilterError = createAction(constant.GET_FILTER_ERROR);

export const getFormEditReruest = createAction(constant.GET_FORM_EDIT_REQUEST);
export const getFormEditSuccess = createAction(constant.GET_FORM_EDIT_SUCCESS);
export const getFormEditError = createAction(constant.GET_FORM_EDIT_ERROR);

export const getFormUpdateReruest = createAction(
  constant.GET_FORM_UPDATE_REQUEST
);
export const getFormUpdateEditSuccess = createAction(
  constant.GET_FORM_UPDATE_SUCCESS
);
export const getFormUpdateEditError = createAction(
  constant.GET_FORM_UPDATE_ERROR
);

export const getChangeEditRequest = createAction(
  constant.GET_CHANGE_EDIT_REQUEST
);
export const getChangeEditSuccess = createAction(
  constant.GET_CHANGE_EDIT_SUCCESS
);
export const getChangeEditError = createAction(constant.GET_CHANGE_EDIT_ERROR);

export const getFilteredTodoRequest = createAction(
  constant.GET_FILTEREDTODO_REQUEST
);
export const getFilteredTodoSuccess = createAction(
  constant.GET_FILTEREDTODO_SUCCESS
);
export const getFilteredTodoError = createAction(
  constant.GET_FILTEREDTODO_ERROR
);
