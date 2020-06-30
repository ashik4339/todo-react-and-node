import React, { useContext } from 'react';
import { TodoListContext } from '../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useContext(TodoListContext);
  return (
    <>
      {todos.length ? (
        <ul className="list">
          {todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} />;
          })}
        </ul>
      ) : (
        <div className="no-todos">No Todos</div>
      )}
    </>
  );
};

export default TodoList;
