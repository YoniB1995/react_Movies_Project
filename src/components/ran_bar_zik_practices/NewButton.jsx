import React , {useState} from 'react';

function NewButton(){

    const [i,setI] = useState(0);

    function countUp(){
        setI(i+5);
    }
    return(
        <div>
            <p>{i}</p>
            <button onClick={countUp}>Click</button>
            <button onClick={()=>{alert('Hello!')}}>Alert</button>
        </div>
    )
}

export default NewButton;