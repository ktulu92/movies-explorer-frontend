import React, { useState, useEffect } from "react";

import RunningTitle from "../RunningTitle/RunningTitle";

import ToggleButton from "../ToggleButton/ToggleButton";

function SearchForm({ searchFilm, onCheckbox, checkboxChecked }) {
  const [searchString, setSearchString] = React.useState("");

  function handleInput(evt) {
    setSearchString(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    searchFilm(searchString);
  }

  function handleCheckbox(evt) {
    evt.preventDefault();   
    searchFilm(searchString);
    console.log(onCheckbox())
    onCheckbox();
  }
  return (
    <section className="search">
      <form className="search__form">
        <input
          className="search__input"
          type="search"
          placeholder="Фильм"
          required
          onChange={handleInput}
        ></input>
        <button className="search__button" type="submit" onClick={handleSubmit}>
          Найти
        </button>
      </form>
      <div className="search__toggle-container">
        <ToggleButton
          onClick={handleCheckbox}
          checkboxChecked={checkboxChecked}
        />
        <p className="search__toggle-label">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
