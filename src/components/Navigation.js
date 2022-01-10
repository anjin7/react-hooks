import React from "react";
import hamberger_btn from './img/icon-menu.png';
import logo_btn from './img/logo.png';
import './Navigation.css';

const style ={
  backgroundColor: 'lightblue',
  height: '16px'
}
function Navigation(){
  return(
    <div className="nav--container">
      <div className="nav-sub--container">
        <img src={hamberger_btn} alt="hamberger menu" style={style}></img>
        <img src={logo_btn} alt="logo" style={style}></img>
        <ul className="nav-sub--menu">
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
      
      <div>
        <ul className="nav-main--menu">
          <li>홈</li>
          <li>채용</li>
          <li>이벤트</li>
          <li>직군별 연봉</li>
          <li>이력서</li>
          <li>커뮤니티</li>
          <li>프리랜서</li>
          <li>AI 합격예측</li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation;