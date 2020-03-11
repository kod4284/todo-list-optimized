import React from 'react';
import TodoListItem from '@/components/TodoListItem';
import '@/styles/TodoList.scss';
import { todoArrayProps } from '@/common/type';

function TodoList({ todos, onRemove }: todoArrayProps) {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default TodoList;
