import React from "react";

export default function Formulario(props){
    
    console.log(props.props)
    return (
        <div>
            <h3>Hola, bienvenido, sabemos que quieres viajar en {props.name}, por favor diligencia el siguiente formulario</h3>
        <form>
            hola soy el fomrulario
        </form>
        </div>
    )
}