import React from 'react'
import FooterJacob from '../../features/Footer/FooterJacob'
import HeaderJacob from '../../features/Header/HeaderJacob'
import Usercard from '../Home/Usercard'


export default function HomeJacob(){
    
   

    return(
        <div className="bodyJacob">
            <HeaderJacob/>
           
            <Usercard firstName="Marko" lastName="Dan" age={30} class="Yoni" img="https://www.w3schools.com/howto/img_avatar.png"/>
            <Usercard firstName="Yoni" lastName="Bitew" age={25} class="Juda" img="https://www.w3schools.com/howto/img_avatar.png"/>
            <Usercard firstName="Yoav" lastName="Bitew" age={22} class="Yoav" img="https://www.w3schools.com/howto/img_avatar.png"/>
            <Usercard firstName="Dani" lastName="Almayo" age={29} class="Dani" img="https://www.w3schools.com/howto/img_avatar.png"/>
            <Usercard firstName="Eden" lastName="Bitew" age={20} class="Eden" img="https://www.w3schools.com/howto/img_avatar.png"/>
            
            
            <FooterJacob/>
        </div>
    )
}