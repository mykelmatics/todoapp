export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: string;
}
interface DeleteTodoAction {
    type: typeof DELETE_TODO;
    payload: string;
  }

export type TodoActionTypes = AddTodoAction | ToggleTodoAction | DeleteTodoAction;
