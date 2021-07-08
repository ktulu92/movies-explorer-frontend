import React from "react";



function ToggleButton (props)  

   {
    return (
      <div className="toggle-button">
        <input type="checkbox" id="toggle"
         className={props.checkboxChecked? "toggle-button__input":"toggle-button__input toggle-button__input-active"}
        onClick={props.onClick}
   
        />
        <label htmlFor="toggle" 
        className={props.checkboxChecked?"toggle-button__label":"toggle-button__label toggle-button__label-active"}
  
        ></label>
      </div>
    );
  }

export default ToggleButton;

// return (
//   <div className="toggle-button">
//     <input type="checkbox" id="toggle"
//      className={props.checkboxChecked? "toggle-button__input toggle-button__input-active":"toggle-button__input"}
//     onClick={props.onClick}

//     />
//     <label htmlFor="toggle" 
//     className={props.checkboxChecked?"toggle-button__label toggle-button__label-active":"toggle-button__label"}

//     ></label>
//   </div>
// );

