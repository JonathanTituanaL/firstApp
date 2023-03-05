import React, { useEffect, useRef,useState } from 'react'
type TimerProps = {
    milisegundos:number,
    segundos?:number//parametro opcional
}

const  Timer =({milisegundos}:TimerProps) => {
    const [segundos,setSegundos] = useState(0);
    const ref = useRef<NodeJS.Timeout>();//guarda el valor en memoria , no se destruye al refrescar la pantalla
    
    useEffect(()=>{
        ref.current && clearInterval(ref?.current);//limpiar el intervalo
        ref.current = setInterval(()=>setSegundos(s => s+1),milisegundos);
        /*return() =>{//::se ejecuta cuando se destruye el componente
            console.log('????')
        }*/
    },[milisegundos]);

  return (
    <>
        <h4>Timer: <small>{segundos}</small></h4>
        
    </>
  )
}

export default Timer