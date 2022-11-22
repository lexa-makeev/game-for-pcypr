import React from "react";
import "./Header.css";
function Header(props) {
  return (
    <header>
      <div className="container">
        <p className="oborot">
          Оборот предприятия: <span>200000 рублей</span>
        </p>
        <p className="raiting">
          Рейтинг предприятия: <span>5.0</span>
        </p>
      </div>
    </header>
  );
}

export default Header;
