export default function Card(props){
    // const image = props.item;
     const posters = ["images/posterOne.jpeg"
,"images/posterTwo.jpeg",
"images/posterThree.jpeg",
"images/posterFour.jpeg",
"images/posterFive.jpeg"];
// let postersList = posters.map((item,index)=>{
//     return <img src={item} alt={index} className="profileImg"/>
// })
    return(
       
       <div className="cardTicket">
           <h3>{props.name}</h3>  
             
           <img src="images/movies_headlogo.png" alt="" srcset="" className="card_HeaderLogo"/>
                  
            
          <img src={props.img} alt="hey" srcset="" className="profileImg"/>
          

       </div>
    )
}