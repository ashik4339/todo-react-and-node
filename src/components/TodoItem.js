import React, { useContext } from 'react';
import { TodoListContext } from '../contexts/TodoContext';

const TodoItem = ({ todo }) => {
  const { removeTodo, findItem, doneTodo } = useContext(TodoListContext);
  return (
    <li className={todo.done ? 'todo-done' : ''}>
      <p>{todo.title}</p>
      <span>{todo.date}</span>
      <button className="done" onClick={() => doneTodo(todo.id)}>
        Done
      </button>
      <button className="edit" onClick={() => findItem(todo.id)}>
        Edit
      </button>
      <button className="delete" onClick={() => removeTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
