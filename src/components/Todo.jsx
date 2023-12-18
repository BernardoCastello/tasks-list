import React, { useState } from 'react';

const Todo = ({ todo, removeTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);
  const [updatedDesc, setUpdatedDesc] = useState(todo.description);
  const [updatedCategory, setUpdatedCategory] = useState(todo.category);

  const handleUpdate = () => {
    updateTodo(todo.id, updatedText, updatedDesc, updatedCategory);
    setIsEditing(false);
  };

  return (
    <div className='todo'>
      {isEditing ? (
        <div className='content'>
          <input
            type='text'
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <input
            type='text'
            value={updatedDesc}
            onChange={(e) => setUpdatedDesc(e.target.value)}
          />
          <select
            value={updatedCategory}
            onChange={(e) => setUpdatedCategory(e.target.value)}
          >
          <option value="">Selecione a Categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudo">Estudo</option>
          <option value="Compras">Compras</option>
          <option value="Casa">Casa</option>
          <option value="Outros">Outros</option>
          </select>
          <button onClick={handleUpdate}>Salvar</button>
        </div>
      ) : (
        <div className='content'>
          <p>{todo.text}</p>
          <p>{todo.description}</p>
          <p className='category'>({todo.category})</p>
          <p>{todo.date} - {todo.time}</p>
        </div>
      )}
      <div>
      {!isEditing && (
          <button className='edit' onClick={() => setIsEditing(true)}>
            Editar
          </button>
        )}
        <button className='remove' onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
