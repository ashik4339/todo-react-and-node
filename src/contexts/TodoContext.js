import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidV4 } from 'uuid';

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];

  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const [editItem, setEditItem] = useState(null);

  const Time = new Date().toLocaleTimeString();

  // Add todos
  const addTodo = (title) => {
    setTodos([
      ...todos,
      {
        title,
        id: uuidV4(),
        date: Time,
        done: false,
        search: '',
      },
    ]);
  };

  // Remove todos
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Clear todos
  const clearList = () => {
    setTodos([]);
  };

  // Done todo
  const doneTodo = (id, done) => {
    const doneTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !done } : todo
    );
    setTodos(doneTodos);
  };

  // Find todo
  const findItem = (id) => {
    const item = todos.find((todo) => todo.id === id);

    setEditItem(item);
  };

  // Edit todo
  const editTodo = (title, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { title, id, date: Time } : todo
    );
    setTodos(newTodos);
    setEditItem(null);
  };

  return (
    <TodoListContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        clearList,
        findItem,
        editTodo,
        doneTodo,
        editItem,
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
