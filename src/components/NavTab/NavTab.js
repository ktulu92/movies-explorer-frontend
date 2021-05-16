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

function NavTab(props) {
  // const { isLoggedIn, email, onOut } = props;
  return (
    <ul className="nav-tab">
      <li className="nav-tab__element">
        <a className="nav-tab__link" href="#about-project">
          О проекте
        </a>
      </li>

      <li className="nav-tab__element">
        <a className="nav-tab__link" href="#techs">
          Технологии
        </a>
      </li>

      <li className="nav-tab__element">
        <a className="nav-tab__link" href="#about-me">
          Студент
        </a>
      </li>
    </ul>
  );
}

export default NavTab;
