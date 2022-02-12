import React from "react";

export default function Item(props){
    console.log(props)
    return (
        <li>
            <h4>{props.props.name}</h4>
            <img src={props.props.img} height='100px' width='100px' alt='Imagen no encontrada'/>
        </li>
    )

}
