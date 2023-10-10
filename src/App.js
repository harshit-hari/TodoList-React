import React from 'react';
import './App.css';
import TodoListComponent from './todoList';
import { useState } from 'react';



function App() {
  const [todo , setTodo] = useState('');
const[todoList , setList] = useState([]);


  return (
    <div id='todo-box' >
      <div id='todo-box-2'>
        <input value={todo} id='' onChange={(e) => {setTodo(e.target.value); }}/>
        <button onClick={(e)=> { setList([...todoList , todo]) ; setTodo('')}  }> Add Todo</button>
          
          <TodoListComponent todoList = {todoList} name ='Harshit'/>
        </div> 
    </div>
  );
}

export default App;
