import React from "react";

function Todo(props){
const todo = props.todo;
    return<div>
            <li>{todo}</li>
    </div>
}
export default Todo;