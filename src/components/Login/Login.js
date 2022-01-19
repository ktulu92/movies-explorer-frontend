import React from "react";
import { Link } from "react-router-dom";


import { useFormWithValidation } from "../../utils/validation";
import logo from "../../images/logo.svg"

function Login(props) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const {
    values,
    // setValues,
    handleChange,
    errors,
    isFormValid,
    // resetForm,
  } = useFormWithValidation();


  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin(values);
  };

  return (
    <section className="login">
    
      <form className="login__form " onSubmit={handleSubmit} noValidate>
        <Link to="/" className="header__logo-link">
          <img alt="logo" src={logo}className="header__logo"></img>
        </Link>
        <h3 className="login__title">Рады видеть!</h3>

        <label className="login__input-label">
          E-mail
          <input
            id="email"
            className="login__input-email login__input"
            name="email"
            type="email"
            placeholder=""
            onChange={handleChange}
            required
          />
          <span className="login__input-error">{errors.email}</span>
        </label>
        <label className="login__input-label">
          Пароль
          <input
            className="login__input-password login__input"
            id="password"
            name="password"
            placeholder=""
            onChange={handleChange}
            minLength="8"
            required
            type="password"
          />
          <span className="login__input-error">{errors.password}</span>
        </label>
        <span className="login__sumbit-error">{props.errorMessage}</span>
        <button
          type="submit"
          disabled={!isFormValid}
          className={`login__submit-button 
        
        ${isFormValid ? "" : "login__submit-button_inactive"}
        `}
        >
          Войти
        </button>
        <p className="register__subtitle">
          Еще не зарегистрированы?{" "}
          <Link to="/signup" type="button" className="login__button-up ">
            Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
