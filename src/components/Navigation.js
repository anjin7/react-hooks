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
    <div className="nav-main--container">
      <div className="">
        <img src={hamberger_btn} alt="hamberger menu" style={style}></img>
        <img src={logo_btn} alt="logo" style={style}></img>

        <ul className="main-menu toggle">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation;