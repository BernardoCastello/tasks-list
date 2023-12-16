import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value || !desc || !category) return;
        addTodo(value, desc, category);

        setValue("")
        setDesc("")
        setCategory("")
    }

  return <div className='todo-form'>
    <h2>Criar Tarefa:</h2>
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Título'
         value={value} onChange={(e) => setValue(e.target.value)}/>
        <input type='text' placeholder='Descrição' 
        value={desc} onChange={(e) => setDesc(e.target.value)}/>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione a Categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudo">Estudo</option>
            <option value="Compras">Compras</option>
            <option value="Casa">Casa</option>
            <option value="Outros">Outros</option>
        </select>
        <button type='submit'>Criar Tafera</button>
    </form>
    </div>
};

export default TodoForm;