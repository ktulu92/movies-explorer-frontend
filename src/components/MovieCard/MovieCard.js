import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useLocation } from "react-router-dom";

function MovieCard(props) {
  const movie = {
    country: props.movie.country,
    director: props.movie.director,
    duration: props.movie.duration,
    year: props.movie.year,
    description: props.movie.description,
    image: props.movie.image,
    trailer: props.movie.trailer,
    nameRU: props.movie.nameRU,
    nameEN: props.movie.nameEN,
    thumbnail: props.movie.thumbnail,
    movieId: props.movie.movieId,
  };
  const likeMovie = props.likeMovie;
  const deleteMovie = props.deleteMovie;
  const isSaved = props.isSavedMovies;

  const calculatedDuration = `${Math.trunc(movie.duration / 60)}ч.  ${
    movie.duration % 60
  }мин.`;

  const [isLiked, setIsLiked] = useState(false);
  const location = useLocation();

  const savedMovies = JSON.parse(localStorage.getItem("savedMovies")); //ПЕРЕПИСАТЬ
  const currentMovie = savedMovies.find(
    (movie) => movie.movieId === props.movie.movieId
  );


  
  
  function handleLike() {
    likeMovie(movie);
    setIsLiked(true);
  }

  function handleDisLike() {
    // ;
    setIsLiked(false);
    
    deleteMovie(currentMovie._id);
    // setIsLiked(false);
  }

  function handleDeleteMovie() {
    // deleteMovie(movie._id);
    
    deleteMovie(currentMovie._id);
    setIsLiked(false);
  }

  React.useEffect(() => {
    if (currentMovie) {
      setIsLiked(true);
    }
  }, [currentMovie, location, isLiked]);

  // ;
  return (
    <div className="template-element">
      <li className="element">
        <div className="element__info">
          <div className="element__text-info">
            <h2 className="element__title">{movie.nameRU}</h2>
            <p className="element__duration">{calculatedDuration}</p>
          </div>

          {props.isSavedMovies ? (
            <button
              onClick={handleDeleteMovie}
              className="element__delete"
            ></button>
          ) : (
            <button
              className={
                isLiked ? "element__like_clicked" : "element__like_not-clicked"
              }
              onClick={!isLiked ? handleLike : handleDisLike}
            ></button>
          )}
        </div>
        <a
          className="element__trailer-link"
          href={movie.trailer}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="element__image"
            src={movie.image}
            alt={movie.nameRU}
          />
        </a>
      </li>
    </div>
  );
}

export default MovieCard;
