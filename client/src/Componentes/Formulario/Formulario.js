import React, { useState } from "react";
import validate from "./validacion";
import  swal from 'sweetalert';

export default function Formulario(props){
    
    const [ errors, setErrors ] = useState({});
    const [input, setInput] = useState({
        nombre: '',
        correo: '',
        celular: '',
        edad: 0
    });

    function handleInput(e) {
    e.preventDefault();
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
       setErrors(
           validate({
               ...input,
             [e.target.name]: e.target.value,
           })
         );
    }

    function handleSubmit(e){
        e.preventDefault();
        if(Object.keys(errors).length !== 0){
            swal('Tu información no es válida, por favor ingrese correctamente los datos.');
        } else {
            console.log(input);
            setInput({
                nombre: '',
                correo: '',
                celular: '',
                edad: 0
            });
            swal('Tu información fue enviada con éxito, estaremos en contacto contigo.',{
                buttons: false,
                timer: 5000,
            })
        }
    }

    return (
        <div className='container-form'>
            <h4 className='titulo'>Hola bienvenido, sabemos que quieres viajar en {props.name}, por favor diligencia el siguiente formulario</h4>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='label'>
                        <label>Nombre completo:</label>
                                            <input 
                                            type="text" 
                                            name='nombre'
                                            value={input.nombre}
                                            onChange={handleInput}
                                            />
                        {errors.nombre && <p >{errors.nombre}</p>}
                    </div>
                    <div className='label'>
                        <label>Correo electrónico:</label>
                                            <input 
                                            type="text" 
                                            name='correo'
                                            value={input.correo}
                                            onChange={handleInput}
                                            />
                        {errors.correo && <p >{errors.correo}</p>}
                    </div>
                    <div className='label'>
                        <label>Celular:</label>
                                            <input 
                                            type="text" 
                                            name='celular'
                                            value={input.celular}
                                            onChange={handleInput}
                                            />
                        {errors.celular && <p >{errors.celular}</p>}
                    </div>
                    <div className='label'>
                        <label>Edad:</label>
                                            <input 
                                            type="number" 
                                            name='edad'
                                            value={input.edad}
                                            onChange={handleInput}
                                           />
                        {errors.edad && <p  >{errors.edad}</p>}
                    </div>
                    <button className='button' type='submit'>SUBMIT</button>
                </form>
        </div>
    )
}