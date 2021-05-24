import React from 'react';
// import Navbar from '../Navbar/Navbar'
// import SearchAppBar from '../Navbar/SearchAppBar'
import NavTest from '../Navbar/Navbar'


function Header(){
    const img = "images/logo_movies_web.png";
    // const {name , lastName, Age} = props
    return(
        <>
        <NavTest/>
        <img src={img} className="imgLogo"></img>
        <div className="header_movies">  
        
        </div>
        
        </>
    )
}




export default Header;