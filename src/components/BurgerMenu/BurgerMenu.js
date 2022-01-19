import React from "react";
import {
 
  Link
 
} from "react-router-dom";
import AccountButton from "../AccountButton/AccountButton";

function BurgerMenu(props) {
  const { isOpen, onClick } = props;

  return (
    <div className={isOpen ? "burger-menu burger-menu__opened" : "burger-menu"}>
      <button className="burger-menu__close-button" onClick={onClick}></button>
      <ul className="burger-menu__navigation">
        <li className="burger-menu__navigaton-cell">
          <Link className="burger-menu__link" to="/">
            Главная
          </Link>
        </li>
        <li className="burger-menu__navigaton-cell">
          <Link className="burger-menu__link" to="/movies">
            Фильмы
          </Link>
        </li>
        <li className="burger-menu__navigaton-cell">
          {" "}
          <Link className="burger-menu__link" to="/saved-movies">
            Сохраненные фильмы{" "}
          </Link>
        </li>
        <AccountButton />
      </ul>
    </div>
  );
}

export default BurgerMenu;
