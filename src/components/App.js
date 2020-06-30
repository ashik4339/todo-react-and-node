import React from 'react';
import TodoListContextProvider from '../contexts/TodoContext';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import FunctionBar from './FunctionBar';

const App = () => {
  return (
    <TodoListContextProvider>
      <div className="container">
        <div className="inner">
          <TodoForm />
          <FunctionBar />
          <TodoList />
        </div>
      </div>
    </TodoListContextProvider>
  );
};

export default App;
