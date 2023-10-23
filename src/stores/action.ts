import { v4 as uuidv4 } from 'uuid';
import { Todo, ADD_TODO, TOGGLE_TODO, DELETE_TODO, TodoActionTypes } from './type';


export function addTodo(text: string): TodoActionTypes {
  return {
    type: ADD_TODO,
    payload: {
      id: uuidv4() ,
      text,
      completed: false,
    },
  };
}

export function toggleTodo(id: string): TodoActionTypes {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
}

export function deleteTodo(id: string): TodoActionTypes {
    return {
      type: DELETE_TODO,
      payload: id,
    };
  }