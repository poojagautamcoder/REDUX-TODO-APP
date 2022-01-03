import React from "react";
import styles from "../styles/List.css";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import AllInput from "../genericcomponent/AllInput";
import { deleteTodo } from "../actions/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const TodosList = (props) => {
  const { inputData } = props;
  const list = useSelector((state) => state.TodoReducers.list);
  const dispatch = useDispatch();
  return (
    <div className="showItems">
      {list.map((curElem) => {
        return (
          <div className="eachItem" key={curElem.id}>
            <div className="result">
              <input
                id="id"
                type="checkbox"
                value="checked"
                className="check"
              />
            </div>
            <div>
              {curElem.edit ? (
                <AllInput className="input-area" />
              ) : (
                <h3 className="heading">{curElem.data}</h3>
              )}
            </div>
            <div className="todo-btn">
              <>
                {curElem.edit ? (
                  <>
                    <div className="tick-cross">
                      <button className="cross">x</button>
                      <button>
                        {" "}
                        <TiTickOutline className="tick" />{" "}
                      </button>
                    </div>
                  </>
                ) : (
                  <AiFillEdit className="writebtn" />
                )}
              </>
              <AiFillDelete
                className="dangerbtn"
                onClick={() => dispatch(deleteTodo(curElem.id))}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TodosList;
