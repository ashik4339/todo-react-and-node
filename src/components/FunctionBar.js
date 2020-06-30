import React, { useContext } from 'react';
import { TodoListContext } from '../contexts/TodoContext';

function FunctionBar() {
  const { clearList } = useContext(TodoListContext);
  return (
    <div className="function-bar">
      <button onClick={clearList}>Clear all todo</button>
    </div>
  );
}

export default FunctionBar;
