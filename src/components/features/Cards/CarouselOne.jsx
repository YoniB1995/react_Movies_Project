import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
function CarouselOne(){
return(
  <>
  <Carousel>
  <Carousel.Item>
    <img
      className="slide_Img"
      src="images/posterEight.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>BLACK MIRROR</h3>
      <p>In the Cinema.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slide_Img"
      src="images/posterTwo.jpeg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>MOONLIGHT</h3>
      <p>In The Cinema.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slide_Img"
      src="images/posterTen.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Joker</h3>
      <p>Coming Soon...(:</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </>
)
}

export default CarouselOne;