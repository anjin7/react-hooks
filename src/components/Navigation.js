import React from "react";

import logo_btn from './img/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Navigation.css';

function Navigation(){
  return(
    <div className="nav--container">
      <div className="nav-sub--container">
        <div className="nav-sub-menu--container">
          <MenuIcon fontSize="medium" className="hamberger" />        
          <ul className="nav-sub-menu">
          <li>직군 전체</li>
          <li>개발</li>
          <li>경영·비즈니스</li>
          <li>마켓팅·광고</li>
          <li>디자인</li>
          <li>고객서비스·리테일</li>
          <li>영업</li>
          <li>인사</li>          
          <li>미디어</li>
          <li>게임 제작</li>
          <li>금융</li>
          <li>엔지니어링·설계</li>
          <li>물류·무역</li>
          <li>의료·제약·바이오</li>
          <li>제조·생산</li>
          <li>교육</li>
          <li>법률·법집행기관</li>
          <li>식·음료</li>
          <li>건설·시설</li>
          <li>공공·복지</li>
          </ul>
        </div>
        <img src={logo_btn} alt="logo" className="logo" />
      </div>    

      <div className="nav-main--container">
        <ul className="nav-main--menu">
          <li><a href="/" className="home">홈</a></li>
          <li><a href="/jobsfeed">채용</a></li>
          <li><a href="/events">이벤트</a></li>
          <li><a href="/salary">직군별 연봉</a></li>
          <li><a href="/cv">이력서</a></li>
          <li><a href="/community">커뮤니티</a></li>
          <li><a href="https://www.wanted.co.kr/gigs/experts">프리랜서</a></li>
          <li><a href="/aiscore/resume">AI 합격예측</a></li>
        </ul>
      </div>

      <div className="nav-icon--container">
        <ul className="nav-icon--menu">
          <li><SearchIcon fontSize="medium" /></li>
          <li><NotificationsNoneIcon fontSize="medium" /></li>
          <li><AccountCircleIcon fontSize="medium" color="disabled" /></li>
          <li><MoreHorizIcon fontSize="medium" /></li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation;