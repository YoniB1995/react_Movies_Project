import React from 'react'

export default function Usercard(props){
    const isOver28 = props.age > 28 ?{color:"blue"} : {color:"green"};
    const colorObj = {color:"red",backgroundColor:"blue"};
    return(
        <div className={props.class} style={isOver28}>
            <p>First Name:{props.firstName}</p>
            <p>Last Name:{props.lastName}</p>
            <p>Age:{props.age}</p>
            <img src={props.img} />
        </div>
    )
}