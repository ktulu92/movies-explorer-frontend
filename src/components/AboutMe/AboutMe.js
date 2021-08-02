import React, { useState, useEffect } from "react";

import RunningTitle from "../RunningTitle/RunningTitle";

function AboutMe(props) {
  // const { isLoggedIn, email, onOut } = props;
  return (
    <section className="about-me" id="about-me">
      <RunningTitle title="Студент" />
      <div className="about-me__info">
        <div className="about-me__user-text-info">
      <h1 className="about-me__name">Виталий</h1>
      <h3 className="about-me__profession">Фронтенд-разработчик, 30 лет</h3>
      <p className="about-me__bio">
        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
        есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно
        начал кодить. С 2015 года работал в компании «СКБ Контур». После того,
        как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
        ушёл с постоянной работы.
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
      <div className="about-me__avatar" alt="user-avatar"></div>
      </div>
     



<div className="about-me__portfolio">
  <h4 className="about-me__portfolio-title">Портфолио</h4>
  <ul className="about-me__portfolio-navigation">
  <li className="about-me__portfolio-cell">
    <a className="about-me__portfolio-link"href="https://www.github.com">Статичный сайт
      <div className = "about-me__portfolio-link-icon">↗</div>
</a>
    
  </li>
  <li className="about-me__portfolio-cell">
    <a className="about-me__portfolio-link"href="https://www.github.com">Адаптивный сайт
      <div className = "about-me__portfolio-link-icon">↗</div>
      </a>
    
  </li>
  <li className="about-me__portfolio-cell">
    <a className="about-me__portfolio-link"href="https://www.github.com">Одностраничное приложение
      <div className = "about-me__portfolio-link-icon">↗</div>
      </a>
    
  </li>
  </ul>
</div>

    </section>
  );
}

export default AboutMe;
