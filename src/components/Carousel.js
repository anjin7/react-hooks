import React from 'react';
import './Carousel.css';

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "6.jpg", "7.jpg"];

const slideImg = []
slideImg.src=`./img/${images}`;
function Carousel(){
  return(
    <div className="carousel--container">
      <a href="/events/pre_onboarding_course_6" className="">
        <img src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg" alt="개발자 되고싶은 분들!?" className="carousel-img" />
      </a>      
      <div className="carousel-card--container">
        <h2>제목</h2>
        <h3>내용</h3>
      </div>
    </div>
  )
}

export default Carousel;