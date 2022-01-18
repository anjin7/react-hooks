import React from 'react';
import './Carousel.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Carousel(){
  return(
    <div className="banner">
      <div className="carousel--window">
        <div className="carousel--list">
          <div className="carousel slide1">
            <a href="/events/pre_onboarding_course_6">
              <img src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg" alt="개발자 되고싶은 분들!?" className="carousel-img" />
            </a>
            <div className="carousel-card--container">
              <h2>개발자 되고싶은 분들?!</h2>
              <h3>프론트엔드 무료 교육과정 참여하기</h3>
              <hr />
              <a href="/events/pre_onboarding_course_6" className="carousel-card--link">
                <span>바로가기</span>
              </a>
            </div>
          </div>
          <div className="carousel slide2">
            <a href="/events/pre_onboarding_course_7">
              <img src="https://static.wanted.co.kr/images/banners/1490/0b775035.jpg" alt="마케팅 주니어를 찾습니다" className="carousel-img" />
            </a>
            <div className="carousel-card--container">
              <h2>마케팅 주니어를 찾습니다</h2>
              <h3>기업 과제 풀고 취업까지 한번에!</h3>
              <hr />
              <a href="/events/pre_onboarding_course_7" className="carousel-card--link">
                <span>바로가기</span>
              </a>
            </div>
          </div>
          <div className="carousel slide3">
            <a href="/events/velog01" class="" aria-label="">
              <img src="https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg" alt="개발자 성장 비결 공개!" className="carousel-img" />
            </a>
            <div className="carousel-card--container">
              <h2>개발자 성장 비결 공개!</h2>
              <h3>Velog, 글 쓰는 개발자들의 이야기</h3>
              <hr />
              <a href="/events/velog01" className="carousel-card--link">
                <span>바로가기</span>
              </a>
            </div>
          </div>                  
        </div>        
      </div>
      <button type="button" className="prev_arrow"><ArrowBackIosNewIcon fontSize="small" /></button>
      <button type="button" className="next_arrow"><ArrowForwardIosIcon fontSize="small" /></button>
    </div>
  )
}

export default Carousel;