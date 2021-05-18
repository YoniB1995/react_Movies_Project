import {React , useState} from 'react';

function Button(props){
    const click = props.onClick;
    return(
        <button onClick={click}> Click Here</button>
    )
}

export default Button;