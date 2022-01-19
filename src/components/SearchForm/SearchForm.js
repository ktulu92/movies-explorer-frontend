import React from "react";


import ToggleButton from "../ToggleButton/ToggleButton";

function SearchForm({ searchFilm, onChange, checkboxChecked }) {
  const [searchString, setSearchString] = React.useState("");

  function handleInput(evt) {
    setSearchString(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    searchFilm(searchString);
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
          onChange={onChange}
          checkboxChecked={checkboxChecked}
        />
        <p className="search__toggle-label">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
