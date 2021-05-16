import React from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";
import MovieCard from "../MovieCard/MovieCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MovieCardList/MovieCardList";

function Movies(props) {
  const { isLogin, onClick } = props;
  return (
    <section className="movies">
      <Header isLogin={isLogin} onClick={onClick} />
      <SearchForm />
      <MoviesCardList />

      <Footer />
    </section>
  );
}

export default Movies;
