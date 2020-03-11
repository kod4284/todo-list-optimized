import React, { useState, useRef, useCallback } from 'react';
import TodoList from '@/components/TodoList';
import TodoTemplate from '@/components/TodoTemplate';
import TodoInsert from '@/components/TodoInsert';

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

function App() {
  const [todos, setTodos] = useState(makeDummyData);

  const nextId = useRef(2501);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos((prevTodos) => prevTodos.concat(todo));
      nextId.current += 1;
    },
    [],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    },
    [],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        (prevTodos) => prevTodos.map((todo) => (
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )),
      );
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
