import React from 'react';
import Navbar from '../Navbar/Navbar'
import SearchAppBar from '../Navbar/SearchAppBar'

function Header(){
    const img = "images/logo_movies_web.png";
    // const {name , lastName, Age} = props
    return(
        <>
        <SearchAppBar/>
        <div className="header_movies">  
        <img src={img} className="imgLogo"></img>
        </div>
        
        </>
    )
}




export default Header;