import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useFormWithValidation } from "../../utils/validation";

/* // import { CurrentUserContext } from "../contexts/CurrentUserContext"; */

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const {
    values,
    setValues,
    handleChange,
    errors,
    isFormValid,
    resetForm,
  } = useFormWithValidation();

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };
  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister(values);
  };

  return (
    <section className="register">
      <form className="register__form" onSubmit={handleSubmit}>
        {/* <a className="register__main-page-link" href="/">
          <img className=""></img>
        </a> */}

        <Link to="/" className="header__logo-link">
          <div className="header__logo"></div>
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
