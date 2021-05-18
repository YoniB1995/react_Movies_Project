import {React , useState} from 'react';

function Input(props){
    const over = props.onMouseOver
    const out = props.onMouseOut
    return(
        <input onMouseOver={over} onMouseOut={out} type="text" name="" id="" />
    )
    
}

export default Input;