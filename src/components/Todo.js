import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  checkValueChange,
  deleteTodo,
  editTodo,
} from "../features/todo/todoSlice";

function Todo({ id, todoValue, toggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todoValue);
  const dispatch = useDispatch();

  const handleCheckChange = () => {
    dispatch(
      checkValueChange({
        id: id,
        isDone: !toggle,
      })
    );
  };

  const handleDeleteClick = () => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };

  const handleEditChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleEditSave = () => {
    setIsEditing(false);
    dispatch(
      editTodo({
        id: id,
        text: editedText,
      })
    );
  };
  return (
    <div className="card rounded shadow-sm gy-2">
      <div className="card-body d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <input
            type="checkbox"
            onChange={handleCheckChange}
            className="form-check-input rounded-circle "
          />
          {isEditing ? (
            <input
              type="text"
              value={editedText}
              onChange={handleEditChange}
              onBlur={handleEditSave}
              autoFocus
            />
          ) : (
            <span className="ms-2 fw-semibold">{todoValue}</span>
          )}
        </div>
        <div className="d-flex align-items-center">
          {isEditing ? (
            <span className="card rounded shadow-sm mx-1">
              <button
                className="btn btn-light card-body d-flex align-items-center justify-content-center"
                onClick={handleEditSave}
                style={{
                  height: "3px",
                  width: "3px",
                  borderRadius: "3px",
                  border: "0.5px solid #CCD1D1 ",
                }}
              >
                <i
                  className=" fa-solid fa-bookmark"
                  style={{
                    color: "#424949",
                  }}
                ></i>
              </button>
            </span>
          ) : (
            <>
              <span className="card rounded shadow-sm mx-1">
                <button
                  className="btn btn-light card-body d-flex align-items-center justify-content-center"
                  onClick={() => {
                    setIsEditing(true);
                  }}
                  style={{
                    height: "3px",
                    width: "3px",
                    borderRadius: "3px",
                    border: "0.5px solid #CCD1D1 ",
                  }}
                >
                  <i
                    className=" fa-solid fa-pen"
                    style={{
                      color: "#424949",
                    }}
                  ></i>
                </button>
              </span>
              <span className="card rounded shadow-sm mx-1">
                <button
                  className="btn btn-light card-body d-flex align-items-center justify-content-center"
                  onClick={handleDeleteClick}
                  style={{
                    height: "5px",
                    width: "5px",
                    borderRadius: "3px",
                    border: "0.5px solid #CCD1D1 ",
                  }}
                >
                  <i
                    className=" fa-solid fa-trash-can"
                    style={{
                      color: "#424949",
                    }}
                  ></i>
                </button>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
