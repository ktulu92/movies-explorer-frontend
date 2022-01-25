

# Финальный дипломный проект Яндекс Практикум.

![Скрин](https://user-images.githubusercontent.com/43962272/148739713-63140d00-bee1-44ff-8573-280bb2f63b9f.png)


## Используемые технологии :
*Frontend*

+ Семантическяа верстка HTML5, CSS3(flex-box,grid-layout)
+ Именование классов по методологии BEM Nested.
+ Верстка адаптирована через media queries breakpoints под различные устройства ( поддерживается разрешение экрана от 320 до 1280 и более пикселей по ширине)
+ Фронтенд - React, функциональные компоненты.
+ Логика - JavaScript ES6 (объектно-ориентированный и функциональный подходы,  fetch API).
+ Функции Context, Ref, Redirect, Route, Switch.
+ Хуки useState, useEffect, useContext, useRef, useCallback, useHistory.
+ Использован ESLint в конфигурации airbnb-base.

*Backend*
+ Node.js(Express.js.)
+ Реализован REST API для работы с базой данных, аутентификации и авторизации пользователя.
+ Работа с данными - MongoDB, использование schema, CRUD-операций. Для работы с Node.js использован Mongoose.
+ Применена валидация пользовательских данных на стороне клиента и на стороне пользователя (в том числе с помощью модулей validator, joi/celebrate).
+ Для авторизации используется JWT-токен.
+ Ведутся логи доступа и ошибок при помощи модуля winston.
+ Реализована централизованная обработка ошибок с отправкой корректных статусов и сообщений о ошибках на запросы.


# Описание:
Одностраничное приложение позволяющее пользователю  найти фильмы по запросу и сохранить в личном кабинете. 
SPA состоит из нескольких страниц:

+ Главная. Содержит информацию о выполненном проекте.
+ Страница с фильмами. Содержит форму поиска фильмов и блок с результатами поиска.
+ Страница с сохранёнными фильмами. Показывает фильмы, сохранённые пользователем.
+ Страница регистрации. Позволяет пользователю зарегистрировать аккаунт.
+ Страница авторизации. На ней пользователь может войти в систему.
+ Страница редактирования профиля. Пользователь может изменить данные своего аккаунта.


**Проект можно собрать и запустить локально!**

+ npm install — Чтобы установить зависимости
+ npm start — Чтобы запустить приложение по адресу: http://localhost:3000
+ npm run build — Чтобы получить итоговую сборку

***ВАЖНО: в данный момент сервер недоступен, но есть возможность запустить его локально из репозитория https://github.com/ktulu92/movies-explorer-api***

