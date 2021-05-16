import React from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";
import MovieCard from "../MovieCard/MovieCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Card(props) {
  return (
    <section className="movie-card-list">
      <div className="movie-card-list-container">
        <MovieCard title="33 слова о дизайне" duration="1ч" />

        <MovieCard title="33 слова о дизайне" duration="1ч" />

        <MovieCard title="33 слова о дизайне" duration="1ч" />
      </div>
      <button className="movie-card-list__more-button">Еще</button>
    </section>
  );
}

export default Card;
