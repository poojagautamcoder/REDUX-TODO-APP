import { bindActionCreators } from "redux";
import * as actions from "../constant";
import { Todos } from "../saga/todoSaga";

const initialData = {
  list: [],
  isError: false,
  isLoading: false,
  issuccess: false,
  status: false,
  // isUpdated: [],
  // fiteredItem: [],
  // isFilter: [],
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

    // case actions.GET_CHANGE_EDIT_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true,
    //     issuccess: false,
    //     isError: false,
    //   };
    // case actions.GET_CHANGE_EDIT_SUCCESS:
    //   return {
    //     ...state,
    //   };

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
            ...state,
            isLoading: false,
            issuccess: true,
            isError: false,
            status: !state.status,
          };
        } else {
          return state;
        }
      });
      return {
        ...state,
        list: newArray,
      };

    // case actions.GET_FORM_CHECKED_SUCCESS:
    //   const newArray = state.list.map((curElem, index) => {
    //     if (curElem.id == action.payload.id) {

    //       return {
    // ...state,
    //         isLoading: false,
    //         issuccess: true,
    //         isError: false,
    //         ...curElem,
    //         status: !curElem.status,
    //       };
    //     } else {
    //       return curElem;
    //     }
    //   });
    // return {
    //   ...state,
    //   list: newArray,
    // };

    case actions.GET_FORM_CHECKED_ERROR:
      return {
        ...state,
        isLoading: false,
        issuccess: false,
        isError: true,
      };

    case actions.GET_FILTER_REQUEST:
      return {
        isLoading: true,
        issuccess: false,
        isError: false,
      };

    case actions.GET_FILTER_SUCCESS:
      if (value === "all") {
        const { value } = action.payload;

        return { ...state, formInput: value };
        isFilter(list);
      } else if (value === "completed") {
        let newTodo = list.filter((Todos) => Todos.status === true);

        isFilter(newTodo);
      } else if (value === "incomplete") {
        let newTodo = list.filter((todos) => todos.status === false);
        isFilter(newTodo);
      }
      useEffect(() => {
        fiteredItem([...list]);
      }, [list]);

    case actions.GET_FILTER_ERROR:
      return {
        isLoading: false,
        issuccess: false,
        isError: true,
      };

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
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        list: updateEdit,
      };

    case actions.GET_FORM_EDIT_ERROR:
      return {
        ...state,
        isLoading: false,
        issuccess: false,
        isError: true,
      };

    case actions.GET_CHANGE_EDIT_REQUEST:
      return {
        ...state,
        isLoading: true,
        issuccess: false,
        isError: false,
      };
    case actions.GET_CHANGE_EDIT_SUCCESS:
      const changeEdiit = state.list.map((curElem)=>{
        console.log
        if(curElem.id == action.payload.id){
          return{
            ...curElem,
          editValue : action.payload.tempValue,
          }
          
        }else{
          curElem
        }
        return{
          ...state,
          isLoading: false,
          issuccess: true,
          isError: false,
          list : changeEdiit,
        }
      })
     
    
   

    case actions.GET_FORM_UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true,
        issuccess: false,
        isError: false,
      };
    case actions.GET_FORM_UPDATE_SUCCESS:
      const updateTodo = state.list.map((curElem) => {
        if (curElem.id == id) {
          return {
            ...curElem,
            value: actions.payload.id,
            edit: false,
          };
        }
      });
      return {
        ...state,
        isUpdated: updateTodo,
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
