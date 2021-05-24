import React from 'react'
import Card from '../../../components/features/Cards/Card'


function Container(props){
    const posters = ["images/posterOne.jpeg"
,"images/posterTwo.jpeg",
"images/posterThree.jpeg",
"images/posterFour.jpeg",
"images/posterFive.jpeg",
"images/posterSix.jpg",
"images/posterSeven.jpg",
"images/posterEight.jpg",
"images/posterNine.jpeg",
"images/posterTen.jpg","images/posterEleven.jpg"];
const names = ["Black Panther","MoonLight","King KONG","Avengers EndGame","Se7en","Project Power","1917","Black Mirror","21 Bridges","Joker","Avatar"]
    return(
        <div className="cards" style={props.condition? props.style : null}>
   {posters.map((item,index)=>(<Card name={names[index]} img={item} alt="" key={index} />))}
            
        
        </div>
        
    )
}


export default Container;