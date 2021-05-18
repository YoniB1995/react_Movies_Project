// import TodayTime from '../../ran_bar_zik_practices/TodayTime'

export default function Footer(){
    const techLogo = "images/tech_Icon.png";
    const colorObj = {color:"red"};

    return(


 <>
 <div className="imgFooter">
<img src="images/facebook_Icon.svg"></img>FaceBook
<img src="images/linkedin_Icon.svg"></img>LinkedIn
<img src="images/GITHUB_ICON.svg"></img>GitHub
<img src="images/whatsapp_Icon.svg"></img>WhatsApp
</div>
<div className="footer_center">
    <img src="images/movies_headlogo.png" alt="img_Footer" srcset="" className="img_Footer_Two" />
    <b>Cinema Movies Application</b>
    
</div>
<div >Tech Career FullStack Course<img src={techLogo} alt="" srcset="" className="techLogo"/> ©copyright 2021 JoniB </div>


        </>

    )
}