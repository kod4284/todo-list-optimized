import React, { useState, useRef, useCallback } from 'react';
import TodoList from '@/components/TodoList';
import TodoTemplate from '@/components/TodoTemplate';
import TodoInsert from '@/components/TodoInsert';

function App() {
  interface todos {
    id: number;
    text: string;
    checked: boolean;
  }
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Studying basic concepts of React.',
      checked: true,
    },
    {
      id: 2,
      text: 'Styling Components',
      checked: true,
    },
    {
      id: 3,
      text: 'Making an app which manages todos',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  }, [todos]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
