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
  const [isRegistered, setIsRegistered] = useState(false);

  //Стейты для функционала отображения карточек в зависимости от разрешения экрана

  const [numberOfMovies, setNumberOfMovies] = React.useState();
  const [numberOfAddedMovies, setNumberOfAddedMovies] = React.useState();
  const [windowWidth, setWindowWidth] = useState();

  //Стейт для прелоадера
  const [isLoading, setIsLoading] = useState(false);

  //Стейт для чекбокса короткометражек
  const [checkboxChecked, setCheckboxChecked] = React.useState(true);

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
          return {
            country: item.country,
            director: item.director,
            duration: item.duration,
            year: item.year,
            description: item.description,
            image: imageLink,
            trailer: item.trailerLink,
            thumbnail: thumbnailLink,
            movieId: item.id.toString(),
            nameRU: item.nameRU,
            nameEN: item.nameEN,
          };
        });
        localStorage.setItem("moviesData", JSON.stringify(beatMovies));
        setMovies(JSON.parse(localStorage.getItem("moviesData")));
      })
      .catch((err) => {
        setMoviesErrorMessage("Что то пошло не так");
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //Смена стейта чекбокса поиска короткометражек
  function handleCheckbox(e) {
    setCheckboxChecked(!checkboxChecked);
  }

  //Реализация поиска короткометражек 
  function handleShortFilms(movieShortList) {
    return movieShortList.filter((movie) => {
      return movie.duration <= 40;
    });
  }

  //Будет общая функция фильтрации
  function filterMoviesArray(moviesData, keyWord) {
    let filteredMovies = moviesData.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(keyWord.toLowerCase());
    });

    if (checkboxChecked) {
      setCheckboxChecked(false);
      return handleShortFilms(filteredMovies);
    } else {
      return filteredMovies;
    }
  }

  //Поиск по общему массиву фильмов
  function handleSearchFilm(keyWord) {
    setIsLoading(true); //стейт для прелоадера
    handleGetMovies();
    setTimeout(() => setIsLoading(false), 1000);

    let result = filterMoviesArray(movies, keyWord);
    setFilteredMovies(result);
    localStorage.setItem("filteredMovies", JSON.stringify(result));

    //
  }

  //Поиск по  массиву сохраненных фильмов
  function handleSearchSavedFilm(keyWord) {
    debugger;
    setIsLoading(true); //стейт для прелоадера

    setTimeout(() => {
      let result = filterMoviesArray(savedMovies, keyWord);
      setSavedMovies(result);
      setIsLoading(false); //смена стейта для закрытия прелоадера
    }, 1000);
  }

  //функционал карточек фильмов...

  //функция постановки лайка
  function likeMovie(movie) {
    api
      .addNewMovie(movie) //Добавление фильма на сервер.
      .then((savedMovie) => {
        const films = [...savedMovies, savedMovie];
        localStorage.setItem("savedMovies", JSON.stringify(films));
        setSavedMovies((prevState) => [...prevState, savedMovie]);
        console.log(savedMovies);
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

  //функция редактирования профиля ПРОВЕРИТЬ
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
  //Регистрация работает
  function handleRegister(data) {
    setIsLoading(true);
    api
      .register(data.name, data.email, data.password)
      .then((res) => {
        setIsRegistered(true);
        setIsLoading(false);
        history.push("/signin");
      })
      .catch((err) => {
        setIsRegistered(false);
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

  //Логирование работает
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
  //функция проверки токена работает
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
        // setMoviesSearchResponse(MOVIES_SERVER_ERROR_MESSAGE);
        console.log(error);
      });
  }

  // Проверка токена с ходу и получение данных пользователя
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

  useEffect(() => {
    checkToken();
  }, []);

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
    if (windowWidth >= 768 && windowWidth < 1200) {
      setNumberOfMovies(8);
      setNumberOfAddedMovies(2);
    }
    if (windowWidth < 480) {
      setNumberOfMovies(5);
      setNumberOfAddedMovies(2);
    }
  }, [windowWidth]);

  function handleAddMovies() {
    setNumberOfMovies(numberOfMovies + numberOfAddedMovies);
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
            component={Movies} //
            isLogin={isLogin} //
            numberOfAddedMovies={numberOfAddedMovies} //количество добавляемых фильмов по кнопке
            numberOfMovies={numberOfMovies} //количество фильмов по умолчанию при рендере
            likeMovie={likeMovie} //функция лайка(сохранения)
            deleteMovie={deleteMovie} //функция удаления
            isSavedMovies={false} //стейт для разных страниц (movies\saved-movies)
            isLoading={isLoading} //стейт для прелоадера
            onClick={handleOpenBurgerMenuClick} //обработчик открытия меню
            onCheckbox={handleCheckbox} //хэндлер чекбокса короткометражных
            checkboxChecked={checkboxChecked} //cостояние чекбокса короткометражных
            handleAddMovies={handleAddMovies} //обработчик события кнопки еще
            searchFilm={handleSearchFilm}
            savedMovies={filteredMovies}
          />

          <ProtectedRoute
            exact
            path="/saved-movies"
            savedMoviesErrorMessage={savedMoviesErrorMessage}
            component={SavedMovieCardList}
            onClick={handleOpenBurgerMenuClick} //обработчик события открытия бокового меню
            isSavedMovies={true} ////стейт для разных страниц (movies\saved-movies)
            oonCheckbox={handleCheckbox} //хэндлер чекбокса короткометражных
            checkboxChecked={checkboxChecked} //cостояние чекбокса короткометражных
            isLoading={isLoading} //стейт для прелоадера
            isLogin={isLogin} //???
            signIn={isLogin} //???
            searchFilm={handleSearchSavedFilm}
            savedMovies={savedMovies}
            likeMovie={likeMovie} //функция лайка(сохранения)
            deleteMovie={deleteMovie} //функция удаления
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
          {isLogin ? <Redirect to="/" /> : <Redirect to="/signin" />}
        </Route>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
