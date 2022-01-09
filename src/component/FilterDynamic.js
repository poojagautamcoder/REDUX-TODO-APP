import React from "react";
import AllButtons from "../genericcomponent/AllButtons";
import styles from "../styles/Filter.css";
import { getFilterReruest } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
const FilterDynamic = () => {
  const list = useSelector((state) => state.TodoReducers.list);
  const dispatch = useDispatch();
  return (
    <div className="dynamic-filter">
      <div className="filter">
        <AllButtons
          className="btn toggle-btn"
          onClick={() => dispatch(getFilterReruest("all"))}
          value="all"
        >
          ALL{list.status}
        </AllButtons>
        <AllButtons
          className="btn toggle-btn"
          onClick={() => dispatch(getFilterReruest("completed"))}
          value="completed"
        >
          COMPLETE{list.status}
        </AllButtons>
        <AllButtons
          className="btn toggle-btn"
          onClick={() => dispatch(getFilterReruest("incomplete"))}
          value="incomplete"
        >
          INCOMPLETE{list.status}{" "}
        </AllButtons>{" "}
      </div>{" "}
    </div>
  );
};
export default FilterDynamic;





// const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getFilteredTodoRequest);
//   }, [data.list]);
