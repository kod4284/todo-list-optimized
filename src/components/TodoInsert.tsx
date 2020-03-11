import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import { TodoInsertProps } from '@/common/type';
import '@/styles/TodoInsert.scss';

function TodoInsert({ onInsert }: TodoInsertProps) {
  const [value, setValue] = useState('');

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    [],
  );

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        onChange={onChange}
        placeholder="Insert your todos"
        value={value}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
