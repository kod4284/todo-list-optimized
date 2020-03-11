import React from 'react';
import TodoListItem from '@/components/TodoListItem';
import '@/styles/TodoList.scss';
import { TodoArrayProps } from '@/common/type';

function TodoList({ todos, onRemove, onToggle }: TodoArrayProps) {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;
