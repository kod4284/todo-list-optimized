import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import { todoProps } from '@/common/type';
import '@/styles/TodoListItem.scss';


function TodoListItem({ todo: { checked, id, text }, onRemove }: todoProps) {
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <button type="button" className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </button>
    </div>
  );
}

export default TodoListItem;
