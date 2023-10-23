export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction;
