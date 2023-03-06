export interface Todo {
    id:string;
    desc:string;
    complete:boolean;
}
export interface TodoState{
    todoCount :number;
    todos:Todo[];
    complete:number;
    pending:number;

}
