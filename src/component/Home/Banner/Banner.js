import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
// import Slider1 from '../../../../public/photo/banner_1.jpg';
// import Slider2 from '../../../../public/photo/banner_2.jpg';
// import Slider3 from '../../../../public/photo/banner_3.jpg';

const Banner = () => {
  return (
    <div className="slider">
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-75"
      src="https://i2-prod.hulldailymail.co.uk/incoming/article2829800.ece/ALTERNATES/s1200/0_PW_HM_030519TEMPLE.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-75"
      src="https://s.wsj.net/public/resources/images/BN-JO488_0727WO_M_20150727110300.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-75"
      src="https://www.playspots.in/wp-content/uploads/2020/07/gym-AP-002.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Banner;