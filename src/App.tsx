import React, { useState } from 'react';
import TodoList from '@/components/TodoList';
import TodoTemplate from '@/components/TodoTemplate';
import TodoInsert from '@/components/TodoInsert';

function App() {
  interface todos {
    id: number,
    text: string,
    checked: boolean,
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

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
