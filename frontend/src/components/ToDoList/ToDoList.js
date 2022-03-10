import * as React from 'react';
import "./ToDoList.css";

const ToDoList=({todos,setTodos}) =>{
    const handleComplete =({id})=>{
        setTodos(todos.filter((todo)=>todo.id !== id));
    }
    return (
        <div>
            {todos.map((todo) =>(
                <div className='list'>
                <li key={todo.id}>
                    <input 
                    type="text" value={todo.title}
                    onChange={(event)=>
                    event.preventDefault()} 
                    />
                  <button className='button-complete' onClick={()=>handleComplete(todo)}>Completed</button>
                </li>  
                </div>      
            
            )
            
         
            )}
            
        </div>
    );
};

export default ToDoList;