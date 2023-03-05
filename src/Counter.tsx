import { useState } from "react"


function Counter() {
  const [counter,setCounter] = useState(0);

  const incrementar =(numero:number =1):void =>{
    setCounter(counter+numero);
  }
  return (
    <div className="mt-5">
        <hr/>
        <span>Valor : {counter}</span>
        <br/>
        <button
            className=" btn btn-outline-primary m-2"
            onClick={()=> incrementar()}
        >
            +1
        </button>
        <button
            className=" btn btn-outline-primary m-2"
            onClick={()=> incrementar(2)}
        >
            +2
        </button>
        <hr/>
        <button
            className=" btn btn-outline-warning mt-2"
            onClick={()=> setCounter(0)}
        >
            Reset
        </button>
    </div>
  )
}

export default Counter