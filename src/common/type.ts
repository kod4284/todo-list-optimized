export interface TodoArrayProps extends TodoFunctions{
  todos: Todo[],
}

export interface TodoFunctions {
  onRemove: Function
  onToggle: Function
}

export interface TodoProps extends TodoFunctions{
  todo: Todo,
}

export interface Todo {
  id: number,
  text: string,
  checked: boolean,
}

export interface TodoInsertProps {
  onInsert: Function,
}
