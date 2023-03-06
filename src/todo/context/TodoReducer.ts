import { Todo, TodoState } from '../interfaces/Intefaces';

type TodoAction =
    |{type:'addTodo',payload:Todo}
    |{type:'toggleTodo',payload:{id:string}}

export const todoReducer =(state:TodoState,action:TodoAction): TodoState =>{
    switch(action.type){
        case 'addTodo':
            return {
                ...state,
                todos:[...state.todos,action.payload]
            }
            break;
        case 'toggleTodo':
            return{
                ...state,
                todos:state.todos.map(({...todo})=>{//::permite destruir ese objeto y crear otro
                    if(todo.id === action.payload.id){
                        todo.complete =!todo.complete
                    }
                    return todo;
                })
                
            }
            break;
        default:
            return state;
    }
}