import React from 'react'
import {useSelector, useDispatch}from'react-redux';

function Contador(){
    const contador = useSelector((state)=>{return state})
    const dispatch = useDispatch()
   
    return(
    <div>
        <div>{contador}</div>
        <button onClick={()=>{dispatch({type:'INCREMENT'})}}type="text">+</button>
        <button onClick={()=>{dispatch({type:'DECREMENT'})}}type="text">-</button>
    </div>
    )
}

export default Contador