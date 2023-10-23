import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo , deleteTodo} from './stores/action';
import {MdOutlineRadioButtonChecked, MdOutlineRadioButtonUnchecked} from 'react-icons/md'
import { RiDeleteBin4Line } from 'react-icons/ri'
// import { RootState } from './stores';

const TodoList: React.FC = () => {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();
  const total = todos.length
  const completedTask = todos.filter((todo: any)=>  todo.completed === true)
  
 console.log(todos, "heee");
 

  return (
    <>
        <div className="list">
            {todos.map((todo: any) => (
            <div className='task'>
                {todo.completed &&  <div className='icon' onClick={() => dispatch(toggleTodo(todo.id))}>
                <MdOutlineRadioButtonChecked/> 
                </div> 
                }
               {!todo.completed &&  <div className='icon' onClick={() => dispatch(toggleTodo(todo.id))}>
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
                <div className='delete-icon' onClick={() => dispatch(deleteTodo(todo.id))}>
                    <RiDeleteBin4Line/>
                </div>
            </div>

            ))}
       </div>
       <div>{completedTask.length} <span>of</span> {total} <span>task completed</span></div>
    </>
  );
};

export default TodoList;
