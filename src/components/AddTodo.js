import { useDispatch, useSelector } from "react-redux";
import { addTodo, inputTextChange } from "../features/todo/todoSlice";

function AddTodo() {
  const inputText = useSelector((state) => state.inputText);
  const dispatch = useDispatch();

  const handleInputTextChange = (e) => {
    dispatch(inputTextChange({ text: e.target.value }));
  };

  const handleAddClick = () => {
    dispatch(
      addTodo({
        text: inputText,
        isDone: false,
      })
    );
  };
  return (
    <div className="input-group input-group-seamless mt-2">
      <input
        type="text"
        value={inputText}
        onChange={handleInputTextChange}
        placeholder="Add Tasks..."
        className="mt-2 form-control"
      />
      <span className="input-group-append mt-2">
        <button
          type="button"
          onClick={handleAddClick}
          className="btn btn-outline-secondary rounded"
        >
          <i
            className="fa-solid fa-plus"
            style={{
              color: "#424949",
            }}
          ></i>
        </button>
      </span>
    </div>
  );
}

export default AddTodo;
