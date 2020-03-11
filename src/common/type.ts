export interface TodoArrayProps {
  todos: Todo[],
  onRemove: Function
}

export interface TodoProps {
  todo: Todo,
  onRemove: Function
}

export interface Todo {
  id: number,
  text: string,
  checked: boolean,
}

export interface TodoInsertProps {
  onInsert: Function,
}
