import { bindActionCreators } from "redux";

const initialData = {
  list: [],
};

const TodoReducers = (state = initialData, action) => {
  console.log(action, "llllllll")
  switch (action.type) {
    case "ADD_ITEM":
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
            status: false,
            edit: false,
          },
        ],
      };

    case "DELETE_ITEM":
      const newList = state.list.filter((curElem) => curElem.id != action.payload.id);

      return {
        ...state,
        list: newList,
      };
    default:
      return state;
  }
};
export default TodoReducers;
