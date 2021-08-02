import React from "react";
import { Link, withRouter } from "react-router-dom";

/* // import { CurrentUserContext } from "../contexts/CurrentUserContext"; */
import MovieCard from "../MovieCard/MovieCard";
import Header from "../Header/Header";

function Login(props) {
  return (
    <section className="login">
      {/* <Header/> */}
      <div className="login__form">

      

        <div className="login__logo"></div>
        <h3 className="login__title">Рады видеть!</h3>

        <label className="login__input-label">
          E-mail
          <input
            className="login__input-e-mail register__input"
            name="E-mail"
            placeholder=""
          />
        </label>
        <label className="login__input-label">
          Пароль
          <input
            className="login__input-password register__input"
            name="password"
            placeholder=""
          />
        </label>
        <button className="login__submit-button">Войти</button>
        <p className="register__subtitle">
          Еще не зарегистрированы?{" "}
          <Link to="/login" type="button" className="login__button-up">
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
