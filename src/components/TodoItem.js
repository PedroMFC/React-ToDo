
import React from 'react'

export default function TodoItem(props){
    let {completed} = props.todo.completed
    return (
        <li>
          <input type="checkbox" 
          checked={completed}
          onChange={() => props.handleChangeProps(props.todo.id)}
        /> {props.todo.title}
        <button style={{marginLeft:'10px'}} 
                onClick={() => props.deleteTodoProps(props.todo.id)}>
          Delete
        </button>
        </li>
      )
}
