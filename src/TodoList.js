import React from "react";
import Todo from "./Todo";


function TodoList(props){
const {todoList , name } = props;

if(todoList.length === 0){
    return <h2>NO TODO TO COMPLETE</h2>
}
    return<div> 
        <h2><b>Todo Lists </b></h2>
             <div>
              {todoList.map(todo =>{
                return<Todo todo = {todo}/>}
                )
                }
             </div>
        </div>
    
}

export default React.memo(TodoList);