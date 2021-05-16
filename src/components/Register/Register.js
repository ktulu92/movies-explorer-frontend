import React from "react";
import { Link, withRouter } from "react-router-dom";

/* // import { CurrentUserContext } from "../contexts/CurrentUserContext"; */
import MovieCard from "../MovieCard/MovieCard";
import Header from "../Header/Header";

function Register(props) {
  return (
    <section className="register">
      <div className="register__form">
       
        <a className="register__main-page-link" href="/">
          <img className=""></img>
         
        </a>
       

        <h3 className="register__title">Добро пожаловать!</h3>
        <label className="register__input-label">
          Имя
          <input
            className="register__input-name register__input"
            name="Имя"
            placeholder=""
          />
        </label>
        <label className="register__input-label">
          E-mail
          <input
            className="register__input-e-mail register__input"
            name="E-mail"
            placeholder=""
          />
        </label>
        <label className="register__input-label">
          Пароль
          <input
            className="register__input-password register__input"
            name="password"
            placeholder=""
          />
        </label>
        <button className="register__submit-button">Зарегистрироваться</button>
        <p className="register__subtitle">
          Уже зарегистрированы?{" "}
          <Link to="/signin" type="button" className="register__button-in">
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
