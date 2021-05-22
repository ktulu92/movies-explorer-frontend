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
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Footer from "../Footer/Footer";
import Techs from "../Techs/Techs";
import AboutProject from "../AboutProject/AboutProject";
import RunningTitle from "../RunningTitle/RunningTitle";
import AboutMe from "../AboutMe/AboutMe";
import SearchForm from "../SearchForm/SearchForm";
import MovieCardList from "../MovieCardList/MovieCardList";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Movies from "../Movies/Movies";
import SavedMovieCardList from "../SavedMovieCardList/SavedMovieCardList";

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  console.log(isBurgerMenuOpen);

  function handleOpenBurgerMenuClick() {
    setIsBurgerMenuOpen(true);
    console.log(isBurgerMenuOpen);
  }

  function handleCloseBurgerMenuClick() {
    setIsBurgerMenuOpen(false);
    console.log("zhopa");
  }

  return (
    <div className="page__container">
     
      <Switch>
        <Route exact path="/">
          <Main isLogin={isLogin} onClick={handleOpenBurgerMenuClick} />
        </Route>
        <Route path="/profile">
          <Profile isLogin={isLogin} onClick={handleOpenBurgerMenuClick} />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/movies">
          <Movies isLogin={isLogin} onClick={handleOpenBurgerMenuClick} isSavedMovies={false} />
        </Route>
        <Route path="/saved-movies">
          <SavedMovieCardList
            isLogin={isLogin}
            onClick={handleOpenBurgerMenuClick} isSavedMovies={true}
          />
        </Route>
      </Switch>
      {/* <NotFound /> */}
      <BurgerMenu
        isOpen={isBurgerMenuOpen}
        onClick={handleCloseBurgerMenuClick}
      />
    </div>
  );
}

export default App;
