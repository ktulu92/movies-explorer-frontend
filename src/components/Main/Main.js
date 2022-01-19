import React from "react";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import AboutMe from "../AboutMe/AboutMe";
import Techs from "../Techs/Techs";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Main(props) {
  const { isLogin, onClick,  } = props;
  return (
    <div className="main">
      <Header isLogin={isLogin} onClick={onClick}/>
      <BurgerMenu/>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default Main;
