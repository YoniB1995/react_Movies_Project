import {React , useState} from 'react';
import Input from './Input';

function MyDivContainer(){
    const [over,SetOver] = useState('');
    function overText(e){
        SetOver(e.target.value)
    }
    const [out,SetOut] = useState('');
    function outText(){
        SetOut(over)
    }
    return(
        <div>
            <p>{over}</p>
            <p>{out}</p>
            <Input onMouseOver={overText} onMouseOut={outText}/>
        </div>
    )
}

export default MyDivContainer;