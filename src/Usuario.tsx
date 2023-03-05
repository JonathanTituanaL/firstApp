import { useState } from 'react';

interface User{
    uid:string,
    name:string
}
const tempUser ={
    uid:"S3EEW",
    name:"tempUser"
}
function Usuario() {
    const [user,setUser] = useState<User>(tempUser);
    const login = ():void =>{
        setUser({
            uid:"ABCD",
            name:"TQM"
        })
    }
  return (
    <div>
        <h3>Uusuario : useState</h3>
        <button
            onClick={login}
            className='btn btn-outline-primary'
        >
            Login
        </button>
        <br/>
        <span>{JSON.stringify(user)}</span>
    </div>
  )
}

export default Usuario