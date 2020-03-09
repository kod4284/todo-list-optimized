import React from 'react';
import TodoListItem from '@/components/TodoListItem';
import '@/styles/TodoList.scss';

function TodoList() {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
}

export default TodoList;
