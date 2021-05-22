import React, { useState, useEffect } from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function MovieCard(props) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }
 

  const cardLikeButtonClassName = `element__delete-button ${
    isLiked ? "element__like_clicked" : "element__like_not-clicked"
  }`;

  function handleDeleteClick() {}
  return (
    <div className="template-element">
      <li className="element">
        <div className="element__info">
          <div className = "element__text-info">
          <h2 className="element__title">{props.title}</h2>
          <p className="element__duration">2часа</p>
          </div>
          {props.isSavedMovies ? (
            <button
              onClick={handleDeleteClick}
              className="element__delete"
            ></button>
          ) : (
            <button
              onClick={handleLikeClick}
              className={cardLikeButtonClassName}
            ></button>
          )}
        </div>

        <img
          className="element__image"
          src="https://st.depositphotos.com/1760224/3660/i/600/depositphotos_36606389-stock-photo-sport-success-on-sunset-background.jpg"
          alt={props.name}
        />
      </li>
    </div>
  );
}

export default MovieCard;
