import React from "react";
import { Link, withRouter } from "react-router-dom";

/* // import { CurrentUserContext } from "../contexts/CurrentUserContext"; */
import MovieCard from "../MovieCard/MovieCard";
import Header from "../Header/Header";

function NotFound(props) {
  return (
    <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
    
          <Link to="/login" type="button" className="not-found__back">
            Назад
          </Link>
    
    </section>
  );
}

export default NotFound;
