import React, { useRef, useCallback, useReducer } from 'react';
import TodoList from '@/components/TodoList';
import TodoTemplate from '@/components/TodoTemplate';
import TodoInsert from '@/components/TodoInsert';
import { Todo, TodoAction } from '@/common/type';

function makeDummyData() {
  const array = [];
  for (let i = 1; i <= 2500; i += 1) {
    array.push({
      id: i,
      text: `todo ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos: Array<Todo>, action: TodoAction) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo: Todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(
        (todo) => (
          todo.id !== action.id ? todo : { ...todo, checked: !todo.checked }
        ),
      );
    default:
      return todos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, undefined, makeDummyData);

  const nextId = useRef(2501);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      dispatch({ type: 'INSERT', todo });
      nextId.current += 1;
    },
    [],
  );

  const onRemove = useCallback(
    (id) => {
      dispatch({ type: 'REMOVE', id });
    },
    [],
  );

  const onToggle = useCallback(
    (id) => {
      dispatch({ type: 'TOGGLE', id });
    },
    [],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
