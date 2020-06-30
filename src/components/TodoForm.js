import React, { useState, useContext, useEffect } from 'react';
import { TodoListContext } from '../contexts/TodoContext';

function TodoForm() {
  const { addTodo, editTodo, editItem } = useContext(TodoListContext);
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTodo(title);
      setTitle('');
    } else {
      editTodo(title, editItem.id);
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);
  return (
    <form onSubmit={handleSubmit}>
      <div className="create">
        <input
          type="text"
          placeholder="Enter todo name"
          value={title}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {editItem ? 'Update Todo' : 'Create Todo'}
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
