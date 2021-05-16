import React from "react";
import { Link, withRouter } from "react-router-dom";

// import { CurrentUserContext } from "../contexts/CurrentUserContext";
import MovieCard from "../MovieCard/MovieCard";
import Header from "../Header/Header";

function Profile(props) {
  const { isLogin, onClick } = props;
  return (
    <section className="profile">
      <Header isLogin={isLogin} onClick={onClick} />
      <div className="profile__form">
        <h3 className="profile__title">Привет,Виталий</h3>
        <input className="profile__input-name" name="Имя" placeholder="Имя" />
        <input
          className="profile__input-e-mail"
          name="E-mail"
          placeholder="E-mail"
        />
        <Link to="/login" type="button" className="profile__button-change">
          Редактировать
        </Link>

        <Link to="/login" type="button" className="profile__button-out">
          Выйти из аккаунта
        </Link>
      </div>
    </section>
  );
}

export default Profile;
