import Todo from "./Todo";

function Todos({ todos, onCheckChange }){
  
    return (
      <div>
      {
        todos.map((todo) =>  
          <Todo key={`${todo.id}`} todoValue={todo.text} 
          onCheckChange={() => onCheckChange(todo.id)} />
        )
      }
      
      </div>
    );
}

export default Todos;