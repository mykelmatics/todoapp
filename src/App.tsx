import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './stores';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import './App.css';

const App: React.FC = () => {
  // const todos = useSelector((state: any) => state.todos);
 
  return (
    <Provider store={store}>
      <div className="App">
        <div className='todo-wrapper'>
          <h1>Todo App</h1>
            <AddTodo />
            <TodoList />
         </div>
     </div>
    </Provider>
  );
};

export default App;

