import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import MoviesCardList from "../MovieCardList/MovieCardList";

function Movies(props) {
  return (
    <section className="movies">
      <Header isLogin={props.isLogin} onClick={props.onClick} />

      <MoviesCardList
        isSavedMovies={props.isSavedMovies}
        onClick={props.onClick}
        // movieSaved={false}
        
        numberOfAddedMovies={props.numberOfAddedMovies}
        numberOfMovies={props.numberOfMovies}
        savedMovies={props.savedMovies}
        handleAddMovies={props.handleAddMovies}
        likeMovie={props.likeMovie}
        deleteMovie={props.deleteMovie}
        searchFilm={props.searchFilm}
        onAddMovies={props.onAddMovies}
        isLoading={props.isLoading}
        onCheckbox={props.onCheckbox}
        checkboxChecked={props.checkboxChecked}
      />
      <Footer />
    </section>
  );
}

export default Movies;
