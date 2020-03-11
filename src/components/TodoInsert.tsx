import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import '@/styles/TodoInsert.scss';

function TodoInsert() {
  const [value, setValue] = useState('');

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    [],
  );

  return (
    <form className="TodoInsert">
      <input onChange={onChange} placeholder="Insert your todos" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
