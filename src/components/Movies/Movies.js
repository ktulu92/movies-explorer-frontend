import React from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";
import MovieCardList from "../MovieCardList/MovieCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import MoviesCardList from "../MovieCardList/MovieCardList";

function Movies(props) {
  const { isLogin, onClick } = props;
  return (
    <section className="movies">
      <Header isLogin={isLogin} onClick={onClick} />
   
      <MoviesCardList isSavedMovies={props.isSavedMovies}/>

      <Footer />
    </section>
  );
}

export default Movies;
