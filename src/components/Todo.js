import { useState } from "react";

function Todo({ id, todoValue, onCheckChange, onEditClick, onDeleteClick }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todoValue);

  const handleEditChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleEditSave = () => {
    onEditClick(id, editedText);
    setIsEditing(false);
  };
  return (
    <div className="card rounded shadow-sm gy-2">
      <div className="card-body d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <input
            type="checkbox"
            onChange={onCheckChange}
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
                  onClick={onDeleteClick}
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
