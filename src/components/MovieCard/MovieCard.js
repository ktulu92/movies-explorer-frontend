import React from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {


  return (
    <div className="template-element">
      <li className="element">
     

        <div className="element__info">
          <h2 className="element__title">{props.title}</h2>
          <p className="element__duration">2часа</p>
          <button className="element__like"></button>
        </div>

        <img
          className="element__image"
          src="https://scontent-arn2-1.xx.fbcdn.net/v/t31.18172-8/p720x720/19575275_500834480261399_7292923101516732296_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=85a577&_nc_ohc=dEslvUxzcX0AX_83iDm&_nc_ht=scontent-arn2-1.xx&tp=6&oh=26cad52515d2b5f045d809818b4bf9fe&oe=608F6E6A"
          alt={props.name}
        />
      </li>
    </div>
  );
}

export default Card;
