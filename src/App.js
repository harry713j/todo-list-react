import "./App.css";
import AddTodo from "./components/AddTodo";
import CompleteTodo from "./components/CompleteTodo";
import TodoList from "./components/TodoList";

function App() {
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
                <AddTodo />
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
                <TodoList />
              </div>
              <div className="row-cols-1 mt-3">
                <h5
                  style={{
                    color: "#A73DF2",
                  }}
                >
                  Finished Tasks
                </h5>

                <CompleteTodo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
