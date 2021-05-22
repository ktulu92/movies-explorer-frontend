import React, { useState, useEffect } from "react";

import RunningTitle from "../RunningTitle/RunningTitle";

import ToggleButton from "../ToggleButton/ToggleButton";

function SearchForm(props) {
  // const { isLoggedIn, email, onOut } = props;
  return (
    <section className="search">
      
        
      <form className="search__form">
        <input className="search__input"type="search" placeholder="Фильм" required></input>
        <button className="search__button" type="submit">Найти</button>
      </form>
<div className="search__toggle-container">
    <ToggleButton/>
    <p className ="search__toggle-label">Короткометражки</p>
    </div>


    </section>
  );
}

export default SearchForm;
