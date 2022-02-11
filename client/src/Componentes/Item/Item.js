import React from "react";


export default function Item(props){
    console.log(props)
    return (
        <li>
            <h4>{props.props.name}</h4>
            <img src={props.props.img} alt='Imagen no encontrada'/>
        </li>
    )

}
