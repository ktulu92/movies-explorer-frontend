import React from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";
import MovieCard from "../MovieCard/MovieCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";


function MovieCardList(props) {
  return (
    <section className="movie-card-list">
       <SearchForm />
      <div className="movie-card-list-container">
        {/* Здесь будет добавление карточек из JSON  */}
     
        <MovieCard  isSavedMovies={props.isSavedMovies} title="33 слова о дизайне" duration="1ч" />

        <MovieCard  isSavedMovies={props.isSavedMovies} title="33 слова о дизайне" duration="1ч" />

        <MovieCard  isSavedMovies={props.isSavedMovies} title="33 слова о дизайне" duration="1ч" />
      </div>
      <button className="movie-card-list__more-button">Еще</button>
    </section>
  );
}

export default MovieCardList;
