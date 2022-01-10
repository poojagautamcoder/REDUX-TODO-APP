import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllButtons from "../genericcomponent/AllButtons";
import AllInput from "../genericcomponent/AllInput";
import styles from "../styles/Form.css";
import { getSubmitReruest } from "../actions/index";

const Todo = (props) => {
  const { inputData, setInputData } = props;
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="heading">Todos List</h2>
      <div className="addItems">
        <AllInput
          className="form-control inputstyle"
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
        />
        <AllButtons
          className="btn-addtodo"
          onClick={() =>
            dispatch(getSubmitReruest(inputData), setInputData(""))
          }
        >
          +
        </AllButtons>
      </div>
    </div>
  );
};

export default Todo;
