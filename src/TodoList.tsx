import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from './stores/action';
import {MdOutlineRadioButtonChecked, MdOutlineRadioButtonUnchecked} from 'react-icons/md'
// import { RootState } from './stores';

const TodoList: React.FC = () => {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();
  const total = todos.length
  const completedTask = todos.filter((todo: any)=>  todo.completed === true)
  


  return (
    <>
        <div className="list">
            {todos.map((todo: any) => (
                <div className='task'>
                {todo.completed &&  <div>
                <MdOutlineRadioButtonChecked/> 
                </div> 
                }
               {!todo.completed &&  <div>
                <MdOutlineRadioButtonUnchecked/> 
                </div> 
                }
                <div
                key={todo.id}
                onClick={() => dispatch(toggleTodo(todo.id))}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                className="eachList"
                >
                {todo.text}
                </div>
                </div>

            ))}
       </div>
       <div>{completedTask.length} <span>of</span> {total} <span>completed task</span></div>
    </>
  );
};

export default TodoList;
