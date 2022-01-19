// const urlData = "https://api.explorer-movies.nomoredomains.icu"; //До деплоя будет локал хост
const urlData = "http://localhost:3001"

//ok
export function register(name, email, password) {
 
  return fetch(`${urlData}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // credentials: "include",
    
    body: JSON.stringify({ name, email, password }), //Может быть нужно "name":name
  }).then((res) => handleResponse(res));
}

//Получение фильмов
export function getMovies() {
  const token = localStorage.getItem("jwt");
  return fetch(`${urlData}` + "/movies", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
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
export function addNewMovie(data) {
  const token = localStorage.getItem("jwt");

  return (
    fetch(`${urlData}/movies`, {
      method: "POST",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailer: data.trailer,
        thumbnail: data.thumbnail,
        movieId: data.movieId,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    })
      // .then(res => res.json())
      // .then(data => data)

      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((err) => {
        console.log("Запрос не выполнен", err);
      })
  );
}

export function deleteMovie(movieId) {
  const token = localStorage.getItem("jwt");
  return fetch(`${urlData}/movies/${movieId}`, {
    method: "DELETE",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
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
//headers справить
// export function changeLikeCardStatus(movieId, isLiked) {
//   if (isLiked) {
//     return fetch(`${urlData}` + "/cards/likes/" + `${movieId}`, {
//       method: "PUT",

//       headers: this.headers,
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         // если ошибка, отклоняем промис
//         return Promise.reject(`Ошибка: ${res.status}`);
//       })

//       .catch((err) => {
//         console.log("Запрос не выполнен", err);
//       });
//   } else {
//     return fetch(`${urlData}` + "/cards/likes/" + `${movieId}`, {
//       method: "DELETE",

//       headers: this.headers,
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         // если ошибка, отклоняем промис
//         return Promise.reject(`Ошибка: ${res.status}`);
//       })

//       .catch((err) => {
//         console.log("Запрос не выполнен", err);
//       });
//   }
// }

export function getProfileInfo(token) {
  return fetch(`${urlData}` + "/users/me", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
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
export function editProfile({ name, email }) {
  const token = localStorage.getItem("jwt");
  return fetch(`${urlData}` + "/users/me", {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ email: email, name: name }),
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

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

//ok
export function authorize(email, password) {
  return fetch(`${urlData}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // credentials: "include",
    body: JSON.stringify({ email, password }),
  })
    .then((res) => handleResponse(res))
    .then((data) => {
      if (data != null) {
        localStorage.setItem("jwt", data.token);
      }
      return data;
    });
}
//ok
export function getToken(token) {
  //
  return fetch(`${urlData}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // credentials: "include",
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}
