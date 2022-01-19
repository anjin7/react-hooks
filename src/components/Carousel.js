import React from 'react';
import './Carousel.css';
import './slide.js';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const slide = [
{
  'id': 1,
  'href': "/events/pre_onboarding_course_6",
  'img': "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
  'alt': "개발자 되고싶은 분들!?",
  'h3': "프론트엔드 무료 교육과정 참여하기",
},
{
  'id': 2,
  'href': "/events/pre_onboarding_course_7",
  'img': "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg",
  'alt': "마케팅 주니어를 찾습니다",
  'h3': "기업 과제 풀고 취업까지 한번에!",
},
{
  'id': 3,
  'href': "/events/velog01",
  'img': "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",
  'alt': "개발자 성장 비결 공개!",
  'h3': "Velog, 글 쓰는 개발자들의 이야기",
},
{
  'id': 4,
  'href': "/events/portfolio_contents_29cm",
  'img': "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg",
  'alt': "포트폴리오를 부탁해!",
  'h3': "디자이너의 포폴 살펴보기",
},
{
  'id': 5,
  'href': "/events/livetalk28",
  'img': "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg",
  'alt': "성장하는 개발자가 되려면?",
  'h3': "OOO 검색하지 말 것!",
},
{
  'id': 6,
  'href': "/events/21_12_s08_b01",
  'img': "https://static.wanted.co.kr/images/banners/1488/baa54448.jpg",
  'alt': "UX 디자이너의 커리어 설계",
  'h3': "브랜드 가치를 더하는 디자인",
},
];

function Carousel(){  
  return(
    <div className="banner">
      <div className="carousel--window">
        <div className="carousel--list">
          <div className="carousel center">
            <a href={slide[0].href}>
              <img src={slide[0].img} alt={slide[0].alt} className="carousel-img" />
            </a>
            <div className="carousel-card--container">
              <h2>{slide[0].alt}</h2>
              <h3>{slide[0].h3}</h3>
              <hr />
              <a href={slide[0].href} className="carousel-card--link">
                <span>바로가기</span>
              </a>
            </div>
          </div>
          <div className="carousel">
            <a href={slide[1].href}>
              <img src={slide[1].img} alt={slide[1].alt} className="carousel-img" />
            </a>
            <div className="carousel-card--container">
              <h2>{slide[1].alt}</h2>
              <h3>{slide[1].h3}</h3>
              <hr />
              <a href={slide[1].href} className="carousel-card--link">
                <span>바로가기</span>
              </a>
            </div>
          </div>
          <div className="carousel">
            <a href={slide[2].href}>
              <img src={slide[2].img} alt={slide[2].alt} className="carousel-img" />
            </a>
            <div className="carousel-card--container">
              <h2>{slide[2].alt}</h2>
              <h3>{slide[2].h3}</h3>
              <hr />
              <a href={slide[2].href} className="carousel-card--link">
                <span>바로가기</span>
              </a>
            </div>
          </div>
          <div className="carousel">
            <a href={slide[3].href}>
              <img src={slide[3].img} alt={slide[3].alt} className="carousel-img" />
            </a>
            <div className="carousel-card--container">
              <h2>{slide[3].alt}</h2>
              <h3>{slide[3].h3}</h3>
              <hr />
              <a href={slide[3].href} className="carousel-card--link">
                <span>바로가기</span>
              </a>
            </div>
          </div>
          <div className="carousel">
            <a href={slide[4].href}>
              <img src={slide[4].img} alt={slide[4].alt} className="carousel-img" />
            </a>
            <div className="carousel-card--container">
              <h2>{slide[4].alt}</h2>
              <h3>{slide[4].h3}</h3>
              <hr />
              <a href={slide[4].href} className="carousel-card--link">
                <span>바로가기</span>
              </a>
            </div>
          </div>
          <div className="carousel">
            <a href={slide[5].href}>
              <img src={slide[5].img} alt={slide[5].alt} className="carousel-img" />
            </a>
            <div className="carousel-card--container">
              <h2>{slide[5].alt}</h2>
              <h3>{slide[5].h3}</h3>
              <hr />
              <a href={slide[5].href} className="carousel-card--link">
                <span>바로가기</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <button type="button"  className="prevBtn"><ArrowBackIosNewIcon fontSize="small" /></button>
      <button type="button"  className="nextBtn"><ArrowForwardIosIcon fontSize="small" /></button>
    </div>

  )
};

export default Carousel;