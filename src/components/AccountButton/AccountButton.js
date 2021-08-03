import React from "react";
import { Link } from "react-router-dom";

function AccountButton(props) {
   return (
    <button className="account-button">
      <div className="account-button__icon"></div>
      <Link className="account-button__link" to="/profile">
        Аккаунт
      </Link>
    </button>
  );
}

export default AccountButton;
