import React from "react";
import './Header.css';
import { Link, useLocation } from "react-router-dom";

function Header() {
  return(
    <>
      <header className="header">
        <h1 className="header__logo">KANBAN BOARD</h1>
        <p className="header__text">
          Добрый день, Евгений!
        </p>
      </header>
    </>
  )
}

export default Header;
