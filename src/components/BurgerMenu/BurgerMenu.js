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
import AccountButton from "../AccountButton/AccountButton";

function BurgerMenu(props) {
  const { isOpen, onClick } = props;

  return (
    <div className={isOpen ? "burger-menu burger-menu__opened" : "burger-menu"}>
      <button className="burger-menu__close-button" onClick={onClick}></button>
      <ul className="burger-menu__navigation">
        <li className="burger-menu__navigaton-cell">
          <a className="burger-menu__link" href="/">
            Главная
          </a>
        </li>
        <li className="burger-menu__navigaton-cell">
          <a className="burger-menu__link" href="/movies">
            Фильмы
          </a>
        </li>
        <li className="burger-menu__navigaton-cell">
          {" "}
          <a className="burger-menu__link" href="/saved-movies">
            Сохраненные фильмы{" "}
          </a>
        </li>
        <AccountButton />
      </ul>
    </div>
  );
}

export default BurgerMenu;
