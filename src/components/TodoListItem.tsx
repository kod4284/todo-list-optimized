import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import { TodoProps } from '@/common/type';
import '@/styles/TodoListItem.scss';

function TodoListItem({
  todo: { checked, id, text },
  onRemove,
  onToggle,
  style,
}: TodoProps) {
  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <button
          type="button"
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </button>
        <button type="button" className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </button>
      </div>
    </div>
  );
}

export default React.memo(TodoListItem);
