import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
function CarouselOne(){
  const styleObj={background:"black",color:"white",backgroundSize:"100vw auto"};
  const styleComp={margin:"25px"};
return(
  <>
  <Carousel style={styleComp}>
    
  <Carousel.Item>
    <img
      className="slide_Img"
      src="images/movies_Carousel.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style={styleObj}>Welcome to our website</h3>
      <p style={styleObj}>Enjoy the content.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slide_Img"
      src="images/posterEight.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 style={styleObj}>BLACK MIRROR</h3>
      <p style={styleObj}>In the Cinema.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slide_Img"
      src="images/posterSeven.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={styleObj}>1917</h3>
      <p style={styleObj}>In The Cinema.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slide_Img"
      src="images/posterTen.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={styleObj}> JOKER </h3>
      <p style={styleObj}>Coming Soon...(:</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </>
)
}

export default CarouselOne;