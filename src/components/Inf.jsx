import React from "react";
import "./Inf.css";
import resume from "../assets/резюме.png";

const Inf = () => {
  return (
    <div>
      <div className="hero">
        <div className="container1 hero__container1"></div>
        <div className="hero__content1">
          <h1 className="hero__title">Веб-разработчик</h1>
          <h2 className="hero__subtitle">Газыбеков Адилет</h2>
          <p className="hero__desription">
            Здравствуй! Дорогой читатель моего резюме. Я являюсь Frontend
            разработчиком. Разрабатываю визуальную часть сайта!
          </p>
        </div>
        <div className="hero__box">
          <img className="hero_box_images" src={resume} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Inf;
