import {React , useState} from 'react';


function Navbar(props){
    const navArr = ["Home","About","Gallery","Contact","Others"];
    const navigation = [];
    navArr.map((i,index)=>
    navigation.push(<li key={index} className={`nav${index}`}>{i} </li>))
    return(
            
               
            <ul className="header_nav">
                {navigation}
            </ul>
        
    )
}

export default Navbar;