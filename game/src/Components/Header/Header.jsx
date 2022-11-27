import React from "react";
import "./Header.css";
function Header({ obj }) {
  return (
    <header>
      <div className="container">
        <p className="oborot">
          Оборот предприятия: <span>{obj.cost_oborot} рублей</span>
        </p>
        <p className="raiting">
          Рейтинг предприятия: <span>{obj.raiting}</span>
        </p>
        <p className="raiting">
          1 день: <span>6 минут</span>
        </p>
      </div>
    </header>
  );
}

export default Header;
