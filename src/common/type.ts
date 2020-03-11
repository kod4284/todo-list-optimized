export interface todoArrayProps {
  todos: todo[],
  onRemove: Function
}

export interface todoProps {
  todo: todo,
  onRemove: Function
}

export interface todo {
  id: number,
  text: string,
  checked: boolean,
}

export interface TodoInsertProps {
  onInsert: Function,
}
