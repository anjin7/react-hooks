import React from 'react';
import './Carousel.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
        <h2>개발자 되고싶은 분들?!</h2>
        <h3>프론트엔드 무료 교육과정 참여하기</h3>
        <hr />
        <a href="/events/pre_onboarding_course_6" className="">
          <span>바로가기</span>
        </a>
      </div>

    <button type="button" className="prev_arrow"><ArrowBackIosNewIcon fontSize="small" /></button>
    <button type="button" className="next_arrow"><ArrowForwardIosIcon fontSize="small" /></button>
    </div>
  )
}

export default Carousel;