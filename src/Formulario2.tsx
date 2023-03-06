
import {useState} from 'react';
import { useForm } from './hooks/useForm';

const Formulario2 = () => {
    const {formulario,ciudad,codigopost,handleChange} = useForm({
        codigopost:"asdf",
        ciudad:"quito"
    });

  return (
    <form autoComplete='off'>
        <div className='mb-3'>
            <label className='form-label'> Código postal:</label>
            <input
                type='text'
                className='form-control'
                name = 'codigopost'
                onChange={handleChange}
                value = {codigopost}
            />
        </div>
        <div className='mb-3'>
            <label className='form-label'> Ciudad:</label>
            <input
                type='text'
                className='form-control'
                name = 'ciudad'
                onChange={handleChange}
                value = {ciudad}
            />
        </div>
        <pre>{JSON.stringify(formulario)}</pre>
    </form>
  )
}

export default Formulario2