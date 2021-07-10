import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import {filterShortMovies} from "../../utils/utils";

function MovieCardList({
  handleAddMovies,
  likeMovie,
  deleteMovie,
  savedMovies,
  numberOfAddedMovies,
  numberOfMovies,
  isLoading,
  searchFilm,
  onChange,
  checkboxChecked,
  isSavedMovies,
}) {
 
  const [filmsToRender, setFilmsToRender] = useState(savedMovies);
  

  useEffect(() => {
    // console.log(filmsToRender);
    if (checkboxChecked) {
      setFilmsToRender(filterShortMovies(savedMovies));
      // console.log(filmsToRender);
    }
    
    else setFilmsToRender(savedMovies);
    // console.log(filmsToRender);
  }, [checkboxChecked,
    savedMovies,
    // filmsToRender
  ]);



  return (
    <section className="movie-card-list">
      <Preloader isLoading={isLoading} />

      <SearchForm
        searchFilm={searchFilm}
        onChange={onChange}
        checkboxChecked={checkboxChecked}
      />

      <div className="movie-card-list-container">
        {filmsToRender
          .slice(numberOfAddedMovies, numberOfMovies)
          .map((card) => (
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

      {filmsToRender.length === 0 ? (
        <p className="movie-card-list__empty-list">
          Воспользуйтесь поиском, чтобы найти фильмы!
        </p>
      ) : (
        <button
          className={
            isSavedMovies
              ? "movie-card-list__more-button movie-card-list__more-button-inactive"
              : "movie-card-list__more-button" &&
                numberOfMovies >= filmsToRender.length
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
