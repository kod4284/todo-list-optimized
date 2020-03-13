import React, { useCallback } from 'react';
import TodoListItem from '@/components/TodoListItem';
import '@/styles/TodoList.scss';
import { TodoArrayProps } from '@/common/type';
import { List } from 'react-virtualized';

function TodoList({ todos, onRemove, onToggle }: TodoArrayProps) {
  const rowRenderer = useCallback(({ index, key, style }) => {
    const todo = todos[index];
    return (
      <TodoListItem
        todo={todo}
        key={key}
        onRemove={onRemove}
        onToggle={onToggle}
        style={style}
      />
    );
  }, [onRemove, onToggle, todos]);
  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={58}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    />
  );
}

export default React.memo(TodoList);
