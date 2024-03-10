import { useReducer } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import CompleteTodo from "./components/CompleteTodo";
import TodoList from "./components/TodoList";

function reducer(state, action) {
  switch (action.type) {
    case "input_text": {
      return {
        ...state,
        inputText: action.text,
      };
    }
    case "check_change": {
      const taskIndex = state.tasks.findIndex((t) => t.id === action.id);
      if (taskIndex !== -1) {
        const taskToMove = state.tasks[taskIndex];
        return {
          ...state,
          tasks: state.tasks.filter((t) => t.id !== action.id),
          completedTasks: [
            ...state.completedTasks,
            { ...taskToMove, done: true },
          ],
        };
      } else {
        const completedTaskIndex = state.completedTasks.findIndex(
          (t) => t.id === action.id
        );
        if (completedTaskIndex !== -1) {
          const taskToMove = state.completedTasks[completedTaskIndex];
          return {
            ...state,
            tasks: [...state.tasks, { ...taskToMove, done: false }],
            completedTasks: state.completedTasks.filter(
              (t) => t.id !== action.id
            ),
          };
        }
      }
      return state;
    }
    case "add": {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: action.id, text: action.text, done: false },
        ],
        inputText: "",
      };
    }
    case "edit": {
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.id ? { ...t, text: action.text } : t
        ),
      };
    }
    case "delete": {
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.id),
      };
    }
    case "remove": {
      return {
        ...state,
        completedTasks: state.completedTasks.filter((t) => t.id !== action.id),
      };
    }
    default:
      throw Error("Unknown action: ", action.type);
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    inputText: "",
    tasks: [],
    completedTasks: [],
  });

  const handleInputTextChange = (e) => {
    dispatch({
      type: "input_text",
      text: e.target.value,
    });
  };

  const handleAddClick = () => {
    dispatch({
      type: "add",
      id: state.tasks.length + 1,
      text: state.inputText,
    });
  };

  const handleCheckChange = (id) => {
    dispatch({
      type: "check_change",
      id: id,
    });
  };

  const handleEditClick = (id, text) => {
    dispatch({
      type: "edit",
      id: id,
      text: text,
    });
  };

  const handleDeleteClick = (taskId) => {
    dispatch({
      type: "delete",
      id: taskId,
    });
  };

  const handleRemoveDoneTask = (taskId) => {
    dispatch({
      type: "remove",
      id: taskId,
    });
  };
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center align-items-center ">
        <div
          className="card shadow rounded"
          style={{
            width: "30rem",
            backgroundColor: "#F8F3E7",
          }}
        >
          <div className="card-body">
            <div className="row-cols-1">
              <div className="col mx-auto text-center">
                <h2
                  className="h2"
                  style={{
                    color: "#A73DF2",
                  }}
                >
                  To-Do List!
                </h2>
                <AddTodo
                  onInputChange={handleInputTextChange}
                  inputTextValue={state.inputText}
                  onAddClick={handleAddClick}
                />
              </div>
            </div>
            <div className="scroll-container mt-3">
              <div className="row-cols-1 mt-3">
                <h5
                  style={{
                    color: "#A73DF2",
                  }}
                >
                  List of Tasks
                </h5>
                <TodoList
                  todoList={state.tasks}
                  onCheckChange={handleCheckChange}
                  onEditClick={handleEditClick}
                  onDeleteClick={handleDeleteClick}
                />
              </div>
              <div className="row-cols-1 mt-3">
                <h5
                  style={{
                    color: "#A73DF2",
                  }}
                >
                  Finished Tasks
                </h5>
                {state.completedTasks.length > 0 && (
                  <CompleteTodo
                    completedTodoList={state.completedTasks}
                    onRemoveDoneTask={handleRemoveDoneTask}
                    onCheckChange={handleCheckChange}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
