import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import MovieCardList from "../MovieCardList/MovieCardList";

function SavedMovieCardList(props) {
  return (
    <section className="movie-card-list">
      <Header isLogin={props.isLogin} onClick={props.onClick} />

      <MovieCardList
        isSavedMovies={props.isSavedMovies}
        onClick={props.onClick}
        testFunct={props.testFunct}
        isLogin={props.isLogin}
        movieSaved={props.movieSaved}
        likeMovie={props.likeMovie}
        deleteMovie={props.deleteMovie}
        savedMovies={props.savedMovies}
        onAddMovies={props.onAddMovies}
        numberOfMovies={props.numberOfMovies}
        isBusy={props.isBusy} //для прелоадера
        onChange={props.onChange}
        checkboxChecked={props.checkboxChecked}
        searchFilm={props.searchFilm} //поиск по фильмам
      />

      <Footer />
    </section>
  );
}

export default SavedMovieCardList;
