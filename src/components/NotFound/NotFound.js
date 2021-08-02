import React from "react";
import { Link,  useHistory } from "react-router-dom";

function NotFound(props) {
  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>

      <Link onClick={handleBack} className="not-found__back">
        Назад
      </Link>
    </section>
  );
}

export default NotFound;
