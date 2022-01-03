import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AllButtons from "../genericcomponent/AllButtons";
import AllInput from "../genericcomponent/AllInput";
import styles from "../styles/Form.css";
import { addTodo } from "../actions/index";

const Todo = (props) => {
  const { inputData, setInputData } = props;
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
          onClick={() => dispatch(addTodo(inputData), setInputData(""))}
        >
          +
        </AllButtons>
      </div>
    </div>
  );
};

export default Todo;
