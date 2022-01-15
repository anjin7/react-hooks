import React from 'react';
import './Carousel.css';

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "6.jpg", "7.jpg"];

const slideImg = []
slideImg.src=`./img/${images}`;
function Carousel(){
  return(
    <div className="carousel--container">
      <div>slideImg</div>
      <div>
        <h3>제목</h3>
        <p>내용</p>
      </div>
    </div>
  )
}

export default Carousel;