import React from "react";

function ToggleButton(props) {
  return (
    <div className="toggle-button">
      <input
        type="checkbox"
        id="toggle"
        className={
          props.checkboxChecked
            ? "toggle-button__input toggle-button__input-active"
            : "toggle-button__input"
        }
        onChange={props.onChange}
      />
      <label
        htmlFor="toggle"
        className={
          props.checkboxChecked
            ? "toggle-button__label toggle-button__label-active"
            : "toggle-button__label"
        }
      ></label>
    </div>
  );
}

export default ToggleButton;
