import React from 'react';
import TodoList from '@/components/TodoList';
import TodoTemplate from '@/components/TodoTemplate';
import TodoInsert from '@/components/TodoInsert';

function App() {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
