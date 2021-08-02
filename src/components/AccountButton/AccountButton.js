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

function AccountButton(props) {
  // const { isLoggedIn, email, onOut } = props;
  return (
    <button className="account-button">
        <div className="account-button__icon"></div>
        <a className="account-button__link" href="/profile">Аккаунт</a>
    
    </button>
  );
}

export default AccountButton;
