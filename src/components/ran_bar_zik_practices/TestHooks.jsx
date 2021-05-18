import React , {useState} from 'react'

function TestHooks(){
const[i,setI] = useState(0)
    function testingI(){
    setI(i+5);

    }
    setInterval(testingI,10000)
    
    return(
        <span>{i}</span>
    )
}


export default TestHooks;