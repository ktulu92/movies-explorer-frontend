import React, { useContext, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import { useFormWithValidation } from "../../utils/validation";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const {
    values,
    setValues,
    handleChange,
    errors,
    isFormValid,
    resetForm,
  } = useFormWithValidation();
  const { isLogin, onClick, handleUpdateUser, errorMessage } = props;

  const [isValuesNotMatched, setisValuesNotMatched] = useState(false);

  //Если данные в инпутах и контексте одинаковые, тогда кнопка остается "реадкитрова"
  useEffect(() => {
    checkValues();
  }, [handleChange]);

  function checkValues() {
    if (
      currentUser.email === values.email &&
      currentUser.name === values.name
    ) {
      setisValuesNotMatched(false);
    } else {
      setisValuesNotMatched(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
        props.onUpdateUser(values);
  };

  return (
    <section className="profile">
      <Header isLogin={isLogin} onClick={onClick} />
      <form className="profile__form" onSubmit={handleSubmit} noValidate>
      {props.isLoading&&<Preloader/>}
        <h3 className="profile__title">
          Привет,
          {currentUser.name}
        </h3>
        <label className="profile__input-label">
          <input
            className="profile__input-name"
            name="name"
            placeholder={currentUser.name}
         
            onChange={handleChange}
            required
          />
          <span className="profile__input-error">{errors.password}</span>
        </label>
        <label className="profile__input-label">
          <input
            className="profile__input-email"
            name="email"
            type="email"
            placeholder={currentUser.email}
           
            onChange={handleChange}
            required
          />
          <span className="profile__input-error">{errors.email}</span>
        </label>

        <p className="profile__error-message">{errorMessage}</p>
        <button
          disabled={!isFormValid}
 
          type="submit"
          className="profile__button-change"
          
        >
          {isFormValid && isValuesNotMatched ? "Сохранить" : "Редактировать"}
        </button>

        <Link
          onClick={props.onClick}
          to="/login"
          type="button"
          className="profile__button-out"
        >
          Выйти из аккаунта
        </Link>
      </form>
    </section>
  );
}

export default Profile;
