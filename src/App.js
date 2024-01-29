import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import CompleteTodo from './components/CompleteTodo';
import Todos from './components/Todos';

function App() {
  const [inputText, setInputText] = useState('');
  const [currentTodo, setCurrentTodo] = useState([]);
  const [doneTodo, setDoneTodo] = useState([]);
  

  const handleInputTextChange = (e) => {
    setInputText(e.target.value);
  }

  const handleAddClick = () => {
    setCurrentTodo([...currentTodo, {id: currentTodo.length + 1, text: inputText}]);
    setInputText('');
  }

  const handleCheckChange = (id) => {
    const completedTodo = currentTodo.find(todo => todo.id === id)
    setDoneTodo([...doneTodo, completedTodo]);
    setCurrentTodo(currentTodo.filter(todo => todo.id !== id));
  }

  return (
    <div className="container mt-5">
    <div className="d-flex justify-content-center align-items-center ">
    <div className="card shadow rounded" style={{ 
        width: '30rem',
        backgroundColor: '#E8E6E8'
        }}>
      <div className="card-body">
      <div className="row-cols-1">
      <div className="col mx-auto text-center">
      <h2 className="h2" style={{
        color: '#9B07FB'
      }} >Todo App!</h2>
      <AddTodo onInputChange={handleInputTextChange} inputTextValue={inputText} onAddClick={handleAddClick} />
       </div>
      </div>
      <div className="scroll-container mt-3">
      <div className="row-cols-1 mt-3">
      <h5 style={{
        color: '#9B07FB'
      }}>To Do list</h5>
        <Todos todos={currentTodo} onCheckChange={handleCheckChange} />
      </div>
      <div className="row-cols-1 mt-3">
      <h5 style={{
        color: '#9B07FB'
      }}>Completed task</h5>
      {doneTodo.length > 0 && <CompleteTodo completedTodos={doneTodo} />}
        
      </div>
      </div>
      
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
