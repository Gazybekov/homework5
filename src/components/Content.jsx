import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div>
      <main>
        <div className="main__left">
          <div className="box1">
            <h3>
              На данный момент учусь в Makers!
              <p>Решил поменять свою профессию</p>
            </h3>
          </div>
          <div className="box2">
            <h3>
              Люблю слушать музыку!
              <p>Хобби: Кемпинг</p>
            </h3>
          </div>
          <div className="box3">
            <h3>
              Возвраст 21 год
              <p>Люблю отдых на природе</p>
            </h3>
          </div>
          <div className="box4">
            <h3>
              Любимое время года: Весна
              <p>Любимый фильм: Интерстеллар</p>
            </h3>
          </div>
        </div>
        <div className="main__right">
          <img
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kZGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
          />
        </div>
      </main>
    </div>
  );
};

export default Content;
