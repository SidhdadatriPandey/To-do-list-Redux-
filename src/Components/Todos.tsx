import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, TodoState } from '../Features/todo/TodoSlice';

// export interface RootState {
//     todo: {
//       todos: Todo[];
//     };
// }
const Todos: React.FC = () => {
    const todos = useSelector((state: TodoState) => state.todos);
    const dispatch=useDispatch();
    return (
        <div className='todos'>
            {todos.map(todo => (
                <div key={todo.id} className='todo'>
                    {todo.text}
                    <button onClick={()=>dispatch(removeTodo(todo.id))}>D</button>
                </div>
            ))}
        </div>
    );
}

export default Todos;
