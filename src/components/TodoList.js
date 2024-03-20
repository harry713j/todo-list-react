import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodoList() {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div>
      {tasks.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          todoValue={todo.text}
          toggle={todo.isDone}
        />
      ))}
    </div>
  );
}

export default TodoList;
