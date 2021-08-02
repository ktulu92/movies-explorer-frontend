import React, { useState, useEffect } from "react";

import RunningTitle from "../RunningTitle/RunningTitle";
import Preloader from "../Preloader/Preloader";
import avatar from "../../images/avatar.jpeg";


function AboutMe(props) {
  // const { isLoggedIn, email, onOut } = props;
  return (
   
    <section className="about-me" id="about-me">
       <Preloader/>
      <RunningTitle title="Студент" />
      <div className="about-me__info">
        <div className="about-me__user-text-info">
      <h1 className="about-me__name">Иван</h1>
      <h3 className="about-me__profession">Фронтенд-разработчик, 29 лет</h3>
      <p className="about-me__bio">
      Я живу в Санкт-Петербурге, закончил факультет многоканальной
            электросвязи СибГУТИ. Я люблю слушать музыку на виниле, а ещё
            увлекаюсь велоспортом. Веб-разработка мое хобби с 2020 года. Хочу
            сменить сферу деятельности и найти постоянную работу в этом
            направлении.
      </p>

      <ul className="about-me_contact-navigation">
        <li className="about-me_contact-cell">
          <a className="about-me_contact-link" href="https://www.facebook.com">Facebook</a>
        </li>
        <li className="about-me_contact-cell">
          <a className="about-me_contact-link" href="https://www.github.com">GitHub</a>
        </li>
      </ul>
      </div>
      <img className="about-me__avatar" src={avatar} alt="user-avatar"></img>
      </div>
     



<div className="about-me__portfolio">
  <h4 className="about-me__portfolio-title">Портфолио</h4>
  <ul className="about-me__portfolio-navigation">
  <li className="about-me__portfolio-cell">
    <a className="about-me__portfolio-link"href="https://ktulu92.github.io/how-to-learn" target="_blank"
     rel="noreferrer">Статичный сайт
      <div className = "about-me__portfolio-link-icon">↗</div>
</a>
    
  </li>
  <li className="about-me__portfolio-cell">
    <a className="about-me__portfolio-link"href="https://ktulu92.github.io/russian-travel"
     target="_blank"
     rel="noreferrer"
     >Адаптивный сайт
      <div className = "about-me__portfolio-link-icon">↗</div>
      </a>
    
  </li>
  <li className="about-me__portfolio-cell">
    <a className="about-me__portfolio-link"href="https://github.com/ktulu92/react-mesto-api-full"
     target="_blank"
     rel="noreferrer">
       Одностраничное приложение
      <div className = "about-me__portfolio-link-icon">↗</div>
      </a>
    
  </li>
  </ul>
</div>

    </section>
  );
}

export default AboutMe;
