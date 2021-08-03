import React, { useState, useEffect } from "react";
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import "./App.css";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Movies from "../Movies/Movies";
import SavedMovieCardList from "../SavedMovieCardList/SavedMovieCardList";
import { filterShortMovies } from "../../utils/utils";

import { CurrentUserContext } from "../../context/CurrentUserContext";

import * as movieApi from "../../utils/MoviesApi";
import * as api from "../../utils/MainApi";

function App() {
  const history = useHistory();
  const location = useLocation();

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState("");
  //Стейты ошибок API
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [registerErrorMessage, setRegisterErrorMessage] = useState("");
  const [profileErrorMessage, setProfileErrorMessage] = useState("");
  const [moviesErrorMessage, setMoviesErrorMessage] = useState("");
  const [savedMoviesErrorMessage, setsavedMoviesErrorMessage] = useState("");

  //Стейты для авторизация и регистрации
  const [isLogin, setIsLogin] = useState(false);

  //Стейт для прелоадера
  const [isLoading, setIsLoading] = useState(false);

  //Стейт для чекбокса короткометражек
  const [checkboxChecked, setCheckboxChecked] = React.useState(false);

  //Стейты для ошибок при рендере карточек и авторизации/регистрации

  const [movies, setMovies] = useState([]);

  const [filteredMovies, setFilteredMovies] = useState([]); //прокидываем в /movies

  const [savedMovies, setSavedMovies] = useState([]); //прокидываем в /saved-movies

  useEffect(() => {
    checkToken();
  }, []);

  function handleOpenBurgerMenuClick() {
    setIsBurgerMenuOpen(true);
  }

  function handleCloseBurgerMenuClick() {
    setIsBurgerMenuOpen(false);
  }

  //Получение общего массива фильмов из стороннего API

  function handleGetMovies() {
    movieApi
      .getMovies()

      .then((res) => {
        const beatMovies = res.map((item) => {
          const imageLink = `https://api.nomoreparties.co${item.image.url}`;
          const thumbnailLink = `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`;
          const countryName = item.country ? item.country : "Cтрана неизвестна";
          const nameRu = item.nameRU.replace(/(^\s|\s$)/g, "");
          // const nameRu = item.nameRU;

          return {
            country: countryName,
            director: item.director,
            duration: item.duration,
            year: item.year,
            description: item.description,
            image: imageLink,
            trailer: item.trailerLink,
            thumbnail: thumbnailLink,
            movieId: item.id.toString(),
            nameRU: nameRu,
            nameEN: item.nameEN,
          };
        });

        localStorage.setItem("moviesData", JSON.stringify(beatMovies));
        setMovies(JSON.parse(localStorage.getItem("moviesData")));
      })
      .catch((err) => {
        setMoviesErrorMessage("Что то пошло не так");
        setIsLoading(false);
      });
  }

  // Смена стейта чекбокса поиска короткометражек
  function handleCheckbox(e) {
    setCheckboxChecked(!checkboxChecked);
  }

  //Общая функция фильтрации
  function filterMoviesArray(moviesData, keyWord) {
    const filteredMovies = moviesData.filter((movie) => {
      console.log(movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()));
      return movie.nameRU.toLowerCase().includes(keyWord.toLowerCase());
    });

    if (checkboxChecked) {
      console.log(checkboxChecked);
      return filterShortMovies(filteredMovies);
    } else {
      return filteredMovies;
    }
  }

  //Поиск по общему массиву фильмов
  function handleSearchFilm(keyWord) {
    setIsLoading(true); //стейт для прелоадера

    setTimeout(() => setIsLoading(false), 1000);

    const result = filterMoviesArray(movies, keyWord);
    setFilteredMovies(result);
    localStorage.setItem("filteredMovies", JSON.stringify(result));
  }

  //Поиск по  массиву сохраненных фильмов
  function handleSearchSavedFilm(keyWord) {
    setIsLoading(true); //стейт для прелоадера
    setTimeout(() => {
      const result = filterMoviesArray(savedMovies, keyWord);
      setSavedMovies(result);
      setIsLoading(false); //смена стейта для закрытия прелоадера
    }, 1000);
  }

  //функция постановки лайка
  function likeMovie(movie) {
    api
      .addNewMovie(movie) //Добавление фильма на сервер.
      .then((savedMovie) => {
        const films = [...savedMovies, savedMovie];
        localStorage.setItem("savedMovies", JSON.stringify(films));
        setSavedMovies((prevState) => [...prevState, savedMovie]);
      })
      .catch((err) => console.log(err));
  }

  //удаление карточки фильма
  function deleteMovie(movieId) {
    api
      .deleteMovie(movieId)
      .then(() => {
        const newCards = savedMovies.filter((item) => {
          return item._id !== movieId;
        });
        setSavedMovies(newCards);
        localStorage.setItem("savedMovies", JSON.stringify(newCards));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //функция выхода из аккаунта
  function handleLogOut() {
    setIsLogin(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("moviesData");
    localStorage.removeItem("filteredMovies");
    localStorage.removeItem("savedMovies");
    setMovies([]);
    setFilteredMovies([]);
    setSavedMovies([]);
    history.push("/");
  }

  //функция редактирования профиля
  function handleUpdateUser(data) {
    setIsLoading(true);
    api
      .editProfile(data)
      .then((userData) => {
        if (userData) {
          setCurrentUser({
            ...currentUser,
            name: userData.newName,
            email: userData.newEmail,
          });
          setIsLoading(false);
          setProfileErrorMessage("Данные успешно отредактированы");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setProfileErrorMessage("Ошибка редактирования /Что то случилось...");
      });
  }
  //Регистрация
  function handleRegister(data) {
    setIsLoading(true);
    api
      .register(data.name, data.email, data.password)
      .then((res) => {
        setIsLoading(false);
        history.push("/signin");
      })
      .catch((err) => {
        setIsLoading(false);

        if (err === 400) {
          return setRegisterErrorMessage("Переданы некорректные данные");
        }
        if (err === 409) {
          return setRegisterErrorMessage("Пользователь с таким email уже есть");
        }
        if (err === 500) {
          return setRegisterErrorMessage("Что то случилось...");
        }

        console.log(`Ошибка: ${err}`);
      });
  }

  //Логирование
  function handleLogin(data) {
    setIsLoading(true);
    api
      .authorize(data.email, data.password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLogin(true);
        setCurrentUser(data);
        setIsLoading(false);
        history.push("/movies");
      })

      .catch((err) => {
        console.log(err);
        setIsLoading(false);

        if (err === 400) {
          return setLoginErrorMessage("Переданы некорректные данные");
        }
        if (err === 401) {
          return setLoginErrorMessage("Неверные имя пользователя или пароль");
        }
        if (err === 500) {
          return setLoginErrorMessage("Что то случилось...");
        }
        setLoginErrorMessage(`Ошибка: ${err}`);
      });
  }
  //функция проверки токена
  function checkToken() {
    const token = localStorage.getItem("jwt");
    if (token) {
      api
        .getProfileInfo(token)

        .then((res) => {
          setCurrentUser(res);

          setIsLogin(true);
          history.push(location);
        })
        .catch((err) => {
          console.log(err);
          return true;
        });
    }
  }
  function handleGetSavedMovies() {
    setIsLoading(true);
    api
      .getMovies()
      .then((res) => {
        setSavedMovies(res);
        localStorage.setItem("savedMovies", JSON.stringify(res));
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setsavedMoviesErrorMessage("Что то пошло не так");
        console.log(error);
      });
  }

  // Проверка токена  и получение данных пользователя
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      return;
    } else {
      Promise.all([api.getProfileInfo(token), handleGetSavedMovies()])
        .then(([userData, favoriteMovieData]) => {
          setCurrentUser({
            ...currentUser,
            name: userData.name,
            email: userData.email,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLogin]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("moviesData"));
    if (movies) {
      setMovies(movies);
      const searchResult = JSON.parse(localStorage.getItem("filteredMovies"));
      if (searchResult) {
        setFilteredMovies(searchResult);
      }
    } else {
      handleGetMovies();
    }
  }, [isLogin]);

  // useEffect(() => {
  //   checkToken();
  // }, []);

  //Стейты для функционала отображения карточек в зависимости от разрешения экрана

  const [numberOfMovies, setNumberOfMovies] = React.useState();
  const [numberOfAddedMovies, setNumberOfAddedMovies] = React.useState();
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth !== windowWidth) {
        setWindowWidth(window.innerWidth);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  useEffect(() => {
    if (windowWidth >= 1279) {
      setNumberOfMovies(12);
      setNumberOfAddedMovies(3);
    }
    if (windowWidth >= 768 && windowWidth < 920) {
      setNumberOfMovies(8);
      setNumberOfAddedMovies(2);
    }
    if (windowWidth < 480) {
      setNumberOfMovies(5);
      setNumberOfAddedMovies(2);
    }
  }, [windowWidth]);

  function handleAddMovies() {
    setNumberOfMovies((prevState) => {
      return prevState + numberOfAddedMovies;
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">
        <Switch>
          <Route exact path="/">
            <Main isLogin={isLogin} onClick={handleOpenBurgerMenuClick} />
          </Route>

          <Route exact path="/signup">
            <Register
              isLoading={isLoading}
              onRegister={handleRegister}
              errorMessage={registerErrorMessage}
            />
          </Route>

          <Route exact path="/signin">
            <Login
              isLoading={isLoading}
              onLogin={handleLogin}
              errorMessage={loginErrorMessage}
            />
          </Route>

          <ProtectedRoute
            exact
            path="/movies"
            moviesErrorMessage={moviesErrorMessage}
            component={Movies}
            isLogin={isLogin}
            numberOfMovies={numberOfMovies}
            likeMovie={likeMovie}
            deleteMovie={deleteMovie}
            isSavedMovies={false}
            isLoading={isLoading}
            onClick={handleOpenBurgerMenuClick}
            onChange={handleCheckbox}
            handleAddMovies={handleAddMovies}
            searchFilm={handleSearchFilm}
            savedMovies={filteredMovies}
          />

          <ProtectedRoute
            exact
            path="/saved-movies"
            savedMoviesErrorMessage={savedMoviesErrorMessage}
            component={SavedMovieCardList}
            onClick={handleOpenBurgerMenuClick}
            isSavedMovies={true}
            onChange={handleCheckbox}
            checkboxChecked={checkboxChecked}
            isLoading={isLoading}
            isLogin={isLogin}
            signIn={isLogin}
            searchFilm={handleSearchSavedFilm}
            savedMovies={savedMovies}
            likeMovie={likeMovie}
            deleteMovie={deleteMovie}
          />

          <ProtectedRoute
            exact
            path="/profile"
            isLoading={isLoading}
            onClick={handleLogOut}
            component={Profile}
            onUpdateUser={handleUpdateUser}
            onSignOut={handleLogOut}
            isLogin={isLogin}
            errorMessage={profileErrorMessage}
          />

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        <BurgerMenu
          isOpen={isBurgerMenuOpen}
          onClick={handleCloseBurgerMenuClick}
        />

        <Route>
          {isLogin ? <Redirect to="/movies" /> : <Redirect to="/" />}
        </Route>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
