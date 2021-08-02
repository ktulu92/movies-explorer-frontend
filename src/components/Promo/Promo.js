
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
import NavTab from "../NavTab/NavTab"
 
function Promo(props) { 
  // const { isLoggedIn, email, onOut } = props; 
  return ( 
    <section className="promo"> 
    <h1 className="promo__title ">Учебный проект студента факультета Веб-разработки.</h1>
    
        
  
      <NavTab/>
    </section> 
  ); 
} 
 
export default Promo; 