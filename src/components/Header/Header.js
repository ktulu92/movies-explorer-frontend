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

function Header(props) {
  const { onClick, isLogin } = props;
  return (
    <header className="header">

      <Link to="/" className="header__logo-link">
        <div className="header__logo"></div>
      </Link>


      {!isLogin ? (
        <nav className="header__menu-auth">
          <Link to="/signup" className="header__up">
            Регистрация
          </Link>
          <Link to="/signin" className="header__in">
            Войти
          </Link>
        </nav>
      ) : (
        <>
        <nav className="header__menu-films">
         <Link className="header__link" to="/movies">
            Фильмы
          </Link>
       
          <Link  className="header__link" to="/saved-movies">
            Сохраненные фильмы
          </Link>
          </nav>
          <button className="account-button header__account-button">
        <div className="account-button__icon header__account-button__icon"></div>
        <Link className="account-button__link header__account-button__link " to="/profile">Аккаунт</Link>
        </button>

          <button
            className="header__burger-menu-open-button"
            onClick={props.onClick}
          ></button>
        </>
      )}

    </header>
  );
}

export default Header;
