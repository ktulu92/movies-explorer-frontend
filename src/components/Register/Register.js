import React from "react";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/validation";
import logo from "../../images/logo.svg";

function Register(props) {
  const {
    values,

    handleChange,
    errors,
    isFormValid,
  } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister(values);
  };

  return (
    <section className="register">
      <form className="register__form" onSubmit={handleSubmit}>
        <Link to="/" className="header__logo-link">
          <img alt="logo" src={logo} className="header__logo"></img>
        </Link>

        <h3 className="register__title">Добро пожаловать!</h3>
        <label className="register__input-label">
          Имя
          <input
            className="register__input-name register__input"
            name="name"
            placeholder=""
            onChange={handleChange}
            type="name"
            required
          />
          <span className="register__input-error">{errors.name}</span>
        </label>
        <label className="register__input-label">
          E-mail
          <input
            id="email"
            className="register__input-email register__input"
            name="email"
            placeholder=""
            onChange={handleChange}
            type="email"
            required
          />
          <span className="register__input-error">{errors.email}</span>
        </label>
        <label className="register__input-label">
          Пароль
          <input
            className="register__input-password register__input"
            id="password"
            name="password"
            placeholder=""
            onChange={handleChange}
            type="password"
            minLength="8"
            required
          />
          <span className="register__input-error">{errors.password}</span>
        </label>
        <button
          className={`register__submit-button ${
            isFormValid ? "" : "register__submit-button_inactive"
          }`}
          type="submit"
          disabled={!isFormValid}
        >
          Зарегистрироваться
        </button>
        <p>{props.errorMessage}</p>
        <p className="register__subtitle">
          Уже зарегистрированы?{" "}
          <Link to="/signin" type="button" className="register__button-in">
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
