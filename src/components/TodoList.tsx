import React from 'react';
import TodoListItem from '@/components/TodoListItem';
import '@/styles/TodoList.scss';

interface Props {
  todos: {
    id: number,
    text: string,
    checked: boolean,
  }
}

function TodoList({ todos: { id, text, checked } }: Props) {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
}

export default TodoList;
