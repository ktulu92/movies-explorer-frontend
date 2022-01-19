import React from "react";

function NavTab(props) {
  return (
    <ul className="nav-tab">
      <li className="nav-tab__element">
        <a className="nav-tab__link" href="#about-project">
          О проекте
        </a>
      </li>

      <li className="nav-tab__element">
        <a className="nav-tab__link" href="#techs">
          Технологии
        </a>
      </li>

      <li className="nav-tab__element">
        <a className="nav-tab__link" href="#about-me">
          Студент
        </a>
      </li>
    </ul>
  );
}

export default NavTab;
