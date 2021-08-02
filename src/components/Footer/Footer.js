import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Link,
  withRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";

function Footer(props) {
  // const { isLoggedIn, email, onOut } = props;
  return (
    <footer className="footer">
      <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>

      <div className="footer__info">
      <p className="footer__copyright">©2021. </p>

      <nav>
        <ul className="footer__navigation-list">
          <li className="footer__navigation-cell">
            <a
              className="footer__navigation-link"
              href="https://praktikum.yandex.ru"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс Практикум
            </a>
          </li>
          <li className="footer__navigation-cell">
            <a
              className="footer__navigation-link"
              href="https://github.com/ktulu92"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="footer__navigation-cell">
            <a
              className="footer__navigation-link"
              href="https://github.com/ktulu92/react-mesto-api-full"
              target="_blank"
              rel="noreferrer"
            >
              FaceBook
            </a>
          </li>
        </ul>
      </nav>
      
      </div>
    </footer>
  );
}

export default Footer;
