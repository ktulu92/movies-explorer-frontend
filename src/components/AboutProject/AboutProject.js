import React from "react";

import RunningTitle from "../RunningTitle/RunningTitle";

function AboutProject(props) {
  // const { isLoggedIn, email, onOut } = props;
  return (
    <section className="about-project" id="about-project">
      <RunningTitle title="О проекте" />
      <div className="about-project__info">
        <div className="about-project__about">
          <h3 className="about-project__about-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__about-subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__about">
          <h3 className="about-project__about-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__about-subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__diagram">
        <div className="about-project__diagram-backend">
          <div className="about-project__backend">1 неделя</div>
          <p className="about-project__backend-subtitle">Back-end</p>
        </div>
        <div className="about-project__diagram-frontend">
          <div className="about-project__frontend">4 недели</div>
          <p className="about-project__frontend-subtitle">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
