import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';
import { useTodos } from '../hooks/useTodos';

const TodoList = () => {

  const {todos} = useTodos();

  return (
        <ul>
            {todos.map(todo=>{
                return(
                    <TodoItem key={todo.id} todo={todo}/>
                )
            })}
        </ul>
  )
}

export default TodoList