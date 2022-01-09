import { bindActionCreators } from "redux";
import * as actions from "../constant";
import { todoChange, Todos } from "../saga/todoSaga";
import { useEffect } from "react";

const initialData = {
  list: [],
  filteredItem: [],
  isError: false,
  isLoading: false,
  issuccess: false,
  status: false,
};

const TodoReducers = (state = initialData, action) => {
  console.log(action, "status");
  switch (action.type) {
    case actions.GET_SUBMIT_REQUEST:
      return {
        ...state,
        isLoading: true,
        issuccess: false,
        isError: false,
      };
    case actions.GET_SUBMIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        issuccess: true,
        isError: false,
        list: [
          ...state.list,
          {
            id: new Date().getTime().toString(),
            value: action.payload,
            status: false,
            edit: false,
            editValue: action.payload,
          },
        ],
      };

    case actions.GET_SUBMIT_ERROR:
      return {
        ...state,
        isLoading: false,
        issuccess: false,
        isError: true,
      };

    case actions.GET_DELETE_REQUEST:
      return {
        ...state,
        isLoading: true,
        issuccess: false,
        isError: false,
      };
    case actions.GET_DELETE_SUCCESS:
      const newList = state.list.filter(
        (curElem) => curElem.id != action.payload
      );

      return {
        ...state,
        isLoading: false,
        issuccess: true,
        isError: false,
        list: newList,
      };
    case actions.GET_DELETE_ERROR:
      return {
        isLoading: false,
        issuccess: false,
        isError: true,
      };

    case actions.GET_FORM_CHECKED_REQUEST:
      return {
        ...state,
        isLoading: true,
        issuccess: false,
        isError: false,
      };

    case actions.GET_FORM_CHECKED_SUCCESS:
      const newArray = state.list.map((curElem, index) => {
        if (curElem.id == action.payload.id) {
          return {
            ...curElem,
            status: !curElem.status,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        list: newArray,
        isLoading: false,
        issuccess: true,
        isError: false,
      };

    case actions.GET_FORM_CHECKED_ERROR:
      return {
        ...state,
        isLoading: false,
        issuccess: false,
        isError: true,
      };



      // FILTER THE TODOS REQUEST:
    case actions.GET_FILTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        issuccess: false,
        isError: false,
      };

    case actions.GET_FILTER_SUCCESS:
      if (value === "all") {
        return {
          ...state,
          filteredItem: [...list],
        };
      } else if (value === "completed") {
       
         const filterValue = list.filter((todo) => todo.status === true);
        return {
          ...state,
          filteredItem: filterValue,
        };
      } else if (value === "incomplete") {
        
         const filterValue = list.filter((todo) => todo.status === false);
        return {
          ...state,
          filteredItem: filterValue,
        };
      }
      return {
        ...state,
        isLoading: false,
        issuccess: true,
        isError: false,
      };
      case actions.GET_FILTER_ERROR:
        return {
          ...state,
          isLoading: false,
          issuccess: false,
          isError: true,
        };

      // get all the filtered todos request:
      case actions.GET_FILTEREDTODO_REQUEST:
        return{
          ...state,
          isLoading: true,
          issuccess: false,
          isError: false,
        }
      case actions.GET_FILTEREDTODO_SUCCESS:
        return{
          ...state,
          filteredItem: [...list],
          isLoading: false,
          issuccess: true,
          isError: false,
        }

        case actions.GET_FILTEREDTODO_ERROR:
          return{
            ...state,
            isLoading: false,
            issuccess: false,
            isError: true,
          }
     
      // FORM EDIT REQUEST:
    case actions.GET_FORM_EDIT_REQUEST:
      return {
        ...state,
        isLoading: true,
        issuccess: false,
        isError: false,
      };
    case actions.GET_FORM_EDIT_SUCCESS:
      const updateEdit = state.list.map((curElem) => {
        if (curElem.id == action.payload.id) {
          return {
            ...curElem,
            edit: action.payload.type == "edit" ? true : false,
            editValue:
              action.payload.type == "cross"
                ? curElem.value
                : curElem.editValue,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        list: updateEdit,
        isLoading: false,
        issuccess: true,
        isError: false,
      };

    case actions.GET_FORM_EDIT_ERROR:
      return {
        ...state,
        isLoading: false,
        issuccess: false,
        isError: true,
      };



    // ONCHANGE REQUEST TO EDIT THE FORM:  
    case actions.GET_CHANGE_EDIT_REQUEST:
      return {
        ...state,
        isLoading: true,
        issuccess: false,
        isError: false,
      };
    case actions.GET_CHANGE_EDIT_SUCCESS:
      const changeEdiit = state.list.map((curElem) => {
        if (curElem.id == action.payload.id) {
          return {
            ...curElem,
            editValue: action.payload.tempValue,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        isLoading: false,
        issuccess: true,
        isError: false,
        list: changeEdiit,
      };

    case actions.GET_CHANGE_EDIT_ERROR:
      return {
        ...state,
        isLoading: false,
        issuccess: false,
        isError: true,
      };



// FORM EDITED FORM UPDATE REQUEST:
    case actions.GET_FORM_UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true,
        issuccess: false,
        isError: false,
      };
    case actions.GET_FORM_UPDATE_SUCCESS:
      const updateTodo = state.list.map((curElem) => {
        if (curElem.id == action.payload) {
          return {
            ...curElem,
            value: curElem.editValue,
            edit: false,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        list: updateTodo,
        isLoading: false,
        issuccess: true,
        isError: false,
      };

    case actions.GET_FORM_UPDATE_ERROR:
      return {
        ...state,
        isLoading: false,
        issuccess: false,
        isError: true,
      };

    default:
      return state;
  }
};
export default TodoReducers;
