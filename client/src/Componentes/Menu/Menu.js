import React, { useState } from "react";
import Formulario from "../Formulario/Formulario";
import Header from "../Header/Header";
import Item from "../Item/Item";
import items from "../Item/items.json";

export default function Menu(){

    const [boolean, setBoolean] = useState(false);
    const [name, setName] = useState('');

    function handleClick(name, e){
        e.preventDefault();
        setBoolean(true);
        setName(name)
    }

    return (
        <div>
            <Header />
                {!boolean ? 
                    <div>
                        <div className='container'>
                            {items?.map((item) => (
                                <ul onClick={(e)=> handleClick(item.name, e)} key={item.id}>
                                    <Item props={item}/>
                                </ul>
                            ))}
                        </div>
                    </div>
                    :
                    <div>
                        <Formulario name={name}/>
                    </div>    
                }
              
        </div>
    )
}