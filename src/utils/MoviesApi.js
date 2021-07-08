export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

export function getMovies() {
  return fetch(`${BASE_URL}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
        .then((data) => data);
      }
      

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log("Запрос не выполнен", err);
    });
}
