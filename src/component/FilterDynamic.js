import React from "react";
import AllButtons from "../genericcomponent/AllButtons";
import styles from "../styles/Filter.css";
import { useSelector, useDispatch } from "react-redux";
const FilterDynamic = () => {
  const list = useSelector((state) => state.TodoReducers.list);
  const dispatch = useDispatch();
  return (
    <></>
  )
//     <div className="dynamic-filter">
//       <div className="filter">
//         <AllButtons
//           className="btn toggle-btn"
//           onClick={() => dispatch(getFormUpdateReruest("all"))}
//           value="all"
//         >
//           ALL{list.status}
//         </AllButtons>
//         <AllButtons
//           className="btn toggle-btn"
//           onClick={() => dispatch(getFormUpdateReruest("completed"))}
//           value="completed"
//         >
//           COMPLETE{list.status}
//         </AllButtons>
//         <AllButtons
//           className="btn toggle-btn"
//           onClick={() => dispatch(getFormUpdateReruest("incomplete"))}
//           value="incomplete"
//         >
//           INCOMPLETE{list.status}
//         </AllButtons>
//       </div>
//     </div>
//   );
 };
export default FilterDynamic;
