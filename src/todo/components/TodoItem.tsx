
import { Todo } from '../interfaces/Intefaces'
import { useTodos } from '../hooks/useTodos';

interface TodoItemProps {
    todo:Todo
}

const TodoItem = ({todo}:TodoItemProps) => {
    const {toggleTodo} = useTodos();
  return (
    <li 
        style={{cursor:'pointer',textDecoration:todo.complete?'line-through':''}}
    onDoubleClick={()=>toggleTodo(todo.id)}>
        {todo.desc}
    </li>
  )
}

export default TodoItem