import { Todo, ADD_TODO, TOGGLE_TODO, TodoActionTypes } from './type';

let nextTodoId = 0;

export function addTodo(text: string): TodoActionTypes {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId++,
      text,
      completed: false,
    },
  };
}

export function toggleTodo(id: number): TodoActionTypes {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
}
