import {React , useState} from 'react';

function Events(){
    const [test,setTest] = useState('');
    function getDetails(a){
        setTest(a.target.value);
    }
    return(
    <div>   
        <span>{test}</span><br></br>
        <input type="text" onChange={getDetails} id="textT" />
    </div>
    )
}

export default Events;