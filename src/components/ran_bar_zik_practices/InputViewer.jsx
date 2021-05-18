import {React , useState} from 'react';
import Button from './Button';
import Input from './Input';


function InputViewer(){

    const [text,setText] = useState('');
    const [a,setA] = useState('');
    function changeText(e){
        setText(e.target.value)
    }
    function clickText(e){
        setA(text)
    }
    return(
        <div>
            <p>{a}</p>
            <Input onChange={changeText}/>
            <Button onClick={clickText}/>
        </div>
    )
}

export default InputViewer;