import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

function MovieCardList({
  handleAddMovies,

  likeMovie,
  deleteMovie,
  savedMovies,

  numberOfAddedMovies,
  numberOfMovies,

  isLoading,
  searchFilm,
  onCheckbox,

  checkboxChecked,
  isSavedMovies,
}) {
  //

  return (
    <section className="movie-card-list">
      <Preloader isLoading={isLoading} />
      
      <SearchForm
        searchFilm={searchFilm}
        onCheckbox={onCheckbox}
        checkboxChecked={checkboxChecked}
      />

      <div className="movie-card-list-container">
        {savedMovies.slice(numberOfAddedMovies, numberOfMovies).map((card) => (
          <MovieCard
            key={card.movieId}
            savedMovies={savedMovies}
            isSavedMovies={isSavedMovies} //saved
            movie={card}
            likeMovie={likeMovie} //функция лайка(сохранения)
            deleteMovie={deleteMovie} //функция удаления
          />
        ))}
      </div>

      {savedMovies.length === 0 ? (
        <p className="movie-card-list__empty-list">
          Воспользуйтесь поиском, чтобы найти фильмы!
        </p>
      ) : (
        <button
          className={
            isSavedMovies
              ? "movie-card-list__more-button movie-card-list__more-button-inactive"
              : "movie-card-list__more-button" &&
                numberOfMovies > savedMovies.length
              ? "movie-card-list__more-button movie-card-list__more-button-inactive"
              : "movie-card-list__more-button"
          }
          onClick={handleAddMovies}
        >
          Еще
        </button>
      )}
    </section>
  );
}

export default MovieCardList;
