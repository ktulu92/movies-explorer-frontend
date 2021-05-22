import React from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";
// import MovieCard from "../MovieCard/MovieCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MovieCardList from "../MovieCardList/MovieCardList";

function SavedMovieCardList(props) {
  const { isLogin, onClick, isSavedMovies } = props;

  return (
    <section className="movie-card-list">
      <Header isLogin={isLogin} onClick={onClick} />

      
        {/* Здесь будет добавление карточек из JSON  */}

        <MovieCardList isSavedMovies={isSavedMovies} />

        {/* <MovieCard isSavedMovies={isSavedMovies}title="33 слова о дизайне" duration="1ч" />

        <MovieCard isSavedMovies={isSavedMovies} title="33 слова о дизайне" duration="1ч" /> */}
    

      <Footer />
    </section>
  );
}

export default SavedMovieCardList;
