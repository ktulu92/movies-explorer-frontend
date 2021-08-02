//mainAPI
//url

//Логирование
//Регистрация
//Выход из аккаунта
//Получение инофрмации о пользователе
//Изменение информации о пользователе

//Удаление фильма
//Создание фильма


class Api {
  constructor(url, headers) {
    this.url = url;
    this.headers = headers;
  }
  
//Получение фильмов
  getInitialMovies() {
    
    return fetch(`${this.url}` + "movies", {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log("Запрос не выполнен", err);
      });
  }


  //Добавление фильма
  addNewMovie({  country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    movieId,
    nameRU,
    nameEN }) {
    return fetch(`${this.url}` + "movies", {
      method: "POST",

      headers: this.headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((err) => {
        console.log("Запрос не выполнен", err);
      });
  }

  deleteMovie(cardId) {
    return fetch(`${this.url}` + "cards/" + `${cardId}`, {
      method: "DELETE",

      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((err) => {
        console.log("Запрос не выполнен", err);
      });
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return fetch(`${this.url}` + "cards/likes/" + `${cardId}`, {
        method: "PUT",

        headers: this.headers,
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          // если ошибка, отклоняем промис
          return Promise.reject(`Ошибка: ${res.status}`);
        })

        .catch((err) => {
          console.log("Запрос не выполнен", err);
        });
    } else {
      return fetch(`${this.url}` + "cards/likes/" + `${cardId}`, {
        method: "DELETE",

        headers: this.headers,
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          // если ошибка, отклоняем промис
          return Promise.reject(`Ошибка: ${res.status}`);
        })

        .catch((err) => {
          console.log("Запрос не выполнен", err);
        });
    }
  }

//   updateUserAvatar(data) {
//     return fetch(`${this.url}` + "users/me/avatar", {
//       method: "PATCH",
//       headers: this.headers,
//       body: JSON.stringify({
//         avatar: data.avatar,
//       }),
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }

//         return Promise.reject(`Ошибка: ${res.status}`);
//       })
//       .catch((err) => {
//         console.log("Запрос не выполнен", err);
//       });
//   }

  getProfileInfo() {
    return fetch(`${this.url}` + "users/me", {
      method: "GET",
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log("Запрос не выполнен", err);
      });
  }
//ok
  editProfile(data) {
    return fetch(`${this.url}` + "users/me", {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log("Запрос не выполнен", err);
      });
  }
}
const urlData = "https://mesto.nomoreparties.co/v1/cohort-17/";
const headersData = {
  authorization: "c9722db9-3ef8-471a-a8fd-61097de987b4",
  "Content-Type": "application/json",
};

const api = new Api(urlData, headersData);

export default api;












































