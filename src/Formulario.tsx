
import { useForm } from './hooks/useForm';

interface FormData {
    email:string;
    nombre:string;
    edad:number;
}

const Formulario = () => {

    const {email,nombre,formulario,handleChange} =useForm<FormData>({
        email:'jtituana@libelulasoft.com',
        nombre:'j tituana',
        edad:25
    });
    

  return (
    <form autoComplete='off'>
        <div className='mb-3'>
            <label className='form-label'> Email:</label>
            <input
                type='email'
                className='form-control'
                name = 'email'
                onChange={handleChange}
                value = {email}
            />
        </div>
        <div className='mb-3'>
            <label className='form-label'> Name:</label>
            <input
                type='text'
                className='form-control'
                name = 'nombre'
                onChange={handleChange}
                value = {nombre}
            />
        </div>
        <pre>{JSON.stringify(formulario)}</pre>
    </form>
  )
}

export default Formulario