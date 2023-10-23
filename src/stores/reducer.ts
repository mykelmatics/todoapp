import { TodoState, TodoActionTypes, ADD_TODO, TOGGLE_TODO } from './type';

const initialState: TodoState = {
  todos: [],
};

export function todoReducer(state = initialState, action: TodoActionTypes): TodoState {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
}
