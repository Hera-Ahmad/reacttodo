import React, { useState } from 'react';
import "./App.css"


const App = () => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEdit] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
const updateTodos=todos.map((t)=>t.id===editTodo.id?(
  t={id:t.id,todo}):{id:t.id,todo:t.todo});
  setTodos(updateTodos);
  setEdit(0);
  setTodo("");
  return;
}

    if (todo !== '') {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
      setTodo("");
    }
  }

  const handleDelete = (id) => {
    const deltodo = todos.filter((to) => to.id !== id);
    setTodos([...deltodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEdit(id);
  }


  return (
    <div className="App">
      <div className="container">
        <h1 >Todo List App</h1>
        <form className="todo-form" onSubmit={handleSubmit}>
          <input type="text" value={todo} placeholder="What In Your Mind" onChange={(e) => setTodo(e.target.value)} />
          <button type="submit">{editId ? "Edit" : "Go"}</button>
        </form>

        <ul className="all-Todos">
          {todos.map((t) => (
            <li className="single-Todo">
              <span className="todo-Text">{t.todo} </span>
              <button onClick={() => handleEdit(t.id)}>Edit</button>
              <button onClick={() => handleDelete(t.id)}> Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
