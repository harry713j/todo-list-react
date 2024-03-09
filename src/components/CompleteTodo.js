function CompleteTodo({ completedTodoList, onRemoveDoneTask, onCheckChange }) {
  return (
    <>
      {completedTodoList.map((todo) => {
        return (
          <div key={`${todo.id}`} className="card rounded shadow-none gy-2">
            <div className="card-body d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input rounded-circle"
                  checked
                  onChange={() => onCheckChange(todo.id)}
                />
                <span className="ms-2 align-middle fw-normal text-decoration-line-through">
                  {todo.text}
                </span>
              </div>
              <span className="card rounded shadow-sm mx-1">
                <button
                  className="btn btn-light card-body d-flex align-items-center justify-content-center"
                  onClick={() => onRemoveDoneTask(todo.id)}
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
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CompleteTodo;
