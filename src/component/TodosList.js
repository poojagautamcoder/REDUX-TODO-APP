import React, { useEffect } from "react";
import styles from "../styles/List.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import AllInput from "../genericcomponent/AllInput";
import {
  getFormCheckedReruest,
  getDeleteReruest,
  getFormEditReruest,
  getFormUpdateReruest,
  getChangeEditRequest,
  getFilteredTodoRequest
} from "../actions/index";
import { useSelector, useDispatch } from "react-redux";

const TodosList = (props) => {
  const list = useSelector((state) => state.TodoReducers.list);

  const dispatch = useDispatch();
  
  useEffect (()=>{
    dispatch(getFilteredTodoRequest)
  },[list]);



  return (
    <div className="showItems">
      {list?.map((curElem) => {
        return (
          <div className="eachItem" key={curElem.id}>
            <div className="result">
              <input
                id= "id"
                type="checkbox"
                value="checked"
                className="check"
                onClick={() => dispatch(getFormCheckedReruest( {
                  id : curElem.id,
                 
                }
                ))}
                checked={list.status}
              />
            </div>

            <div>
              {curElem.edit ? (
                <AllInput
                  className="input-area"
                  onChange={(event) =>
                    dispatch(
                      getChangeEditRequest({
                        id: curElem.id,
                        tempValue: event.target.value,
                      })
                    )
                  }
                  value={curElem.editValue}
                  key={curElem.id}
                />
              ) : (
                <h3 className="heading">{curElem.value}</h3>
              )}
            </div>
            <div className="todo-btn">
              <>
                {curElem.edit ? (
                  <>
                    <div className="tick-cross">
                      <button
                        className="cross"
                        onClick={() => dispatch(getFormEditReruest({
                          id : curElem.id,
                          type : 'cross',
                        }))}
                      >
                        x
                      </button>
                      <button>
                        {" "}
                        <TiTickOutline
                          className="tick"
                          onClick={() =>
                            dispatch(getFormUpdateReruest(curElem.id))
                          }
                        />{" "}
                      </button>
                    </div>
                  </>
                ) : (
                  <AiFillEdit
                    className="writebtn"
                    onClick={() => {
                      dispatch(
                        getFormEditReruest({
                          id: curElem.id,
                          type: "edit",
                        })
                      );
                    }}
                    edit={curElem.edit}
                  />
                )}
              </>
              <AiFillDelete
                className="dangerbtn"
                onClick={() => dispatch(getDeleteReruest(curElem.id))}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TodosList;
