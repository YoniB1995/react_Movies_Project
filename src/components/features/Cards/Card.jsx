export default function Card(props){
    
    return(
       
       <div className="cardTicket">
           <h3>{props.name}</h3>  
             
           <img src="images/movies_headlogo.png" alt="" srcset="" className="card_HeaderLogo"/>
                  
            
          <img src={props.img} alt="hey" srcset="" className="profileImg"/>
          

       </div>
    )
}