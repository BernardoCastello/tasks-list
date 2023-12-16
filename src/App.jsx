/*   App.jsx   */
import { useState } from 'react'
import './App.css'
import Todo from './components/todo';
import TodoForm from './components/todoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text,description, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random()*10000),
      text,
      description,
      category,
      isCompleted: false,
    },
  ];
  setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteresTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);
    setTodos(filteresTodos);
  }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App
