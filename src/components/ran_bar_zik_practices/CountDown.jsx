import React , {useState} from 'react';

function CountDown(props){
    const [num,setNum] = useState(props.num)
    function countNumDown(){
        setNum(num-20)
        setInterval(countNumDown,5000)
        if(num < 0 ){
            clearInterval(countNumDown)
        }
    }
    
    return(
        <div>
            <p>{num}</p>
            <button onClick={countNumDown}>Click Here</button>

        </div>
    )
}

export default CountDown;