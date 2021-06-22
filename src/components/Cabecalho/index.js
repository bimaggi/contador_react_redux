import React from 'react'
import {useSelector}from'react-redux';



function Cabecalho(){
    const contador = useSelector((state)=>{return state})

    return(
        <div className="cabecalho">
            <h1>Contador</h1>
            <div>{contador}</div>
        </div>
    )
}
export default Cabecalho