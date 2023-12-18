import { useState } from 'react';
import './App.css';
import Todo from './components/todo';
import TodoForm from './components/todoForm';


function App() {
  const [todos, setTodos] = useState([]);
  const currentDate = new Date();

  const addTodo = (text, description, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        description,
        category,
        date: currentDate.toLocaleDateString(), // Obtém a data atual
        time: currentDate.toLocaleTimeString(), // Obtém a hora atual
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const updateTodo = (id, updatedText, updatedDesc, updatedCategory) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: updatedText,
          description: updatedDesc,
          category: updatedCategory,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            removeTodo={removeTodo}

          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
