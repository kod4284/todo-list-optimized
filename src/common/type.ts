export interface todoArrayProps {
  todos: todo[]
}

export interface todoProps {
  todo: todo
}

export interface todo {
  id: number,
  text: string,
  checked: boolean,
}
