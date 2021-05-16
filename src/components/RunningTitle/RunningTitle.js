
import React, { useState, useEffect } from "react"; 
import { 
  BrowserRouter, 
  Link, 
  withRouter, 
  Switch, 
  Route, 
  Redirect, 
  useHistory, 
} from "react-router-dom"; 
function RunningTitle(props) {
    // const { isLoggedIn, email, onOut } = props;
    return (
   
        <h2 className="running-title__name">{props.title}</h2>
      

    );
  }
  
  export default RunningTitle;

   