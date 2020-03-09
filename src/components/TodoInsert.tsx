import React from 'react';
import { MdAdd } from 'react-icons/md';
import '@/styles/TodoInsert.scss';

function TodoInsert() {
  return (
    <form className="TodoInsert">
      <input placeholder="Insert your todos" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
