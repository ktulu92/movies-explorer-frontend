import React from "react";



class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    return (
      <div className="toggle-button">
        <input type="checkbox" id="toggle" className="toggle-button__input"/>
        <label htmlFor="toggle" className="toggle-button__label"></label>
      </div>
    );
  }
}

export default ToggleButton;
