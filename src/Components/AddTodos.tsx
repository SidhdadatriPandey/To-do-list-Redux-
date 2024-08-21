import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Features/todo/TodoSlice';

const AddTodos = () => {
    const [inp,setInp]=useState("");
    const dispatch=useDispatch();

    function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        dispatch(addTodo(inp));
        setInp("");
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inp} onChange={(e)=>setInp(e.target.value)}/>
        <button>Go</button>
      </form>
    </div>
  )
}

export default AddTodos
