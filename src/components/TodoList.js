import Todo from "./Todo";

function TodoList({ todoList, onCheckChange, onEditClick, onDeleteClick }) {
  return (
    <div>
      {todoList.map((todo) => (
        <Todo
          key={`${todo.id}`}
          id={todo.id}
          todoValue={todo.text}
          onCheckChange={() => onCheckChange(todo.id)}
          onEditClick={onEditClick}
          onDeleteClick={() => onDeleteClick(todo.id)}
        />
      ))}
    </div>
  );
}

export default TodoList;
