import React from "react";
import './Header.css';
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  function handleHeaderLink() {
    switch (location.pathname) {
      case '/':
        return(
          <>
            <div className="header__box">
              <h1 className="header__logo header__content_main">KANBAN BOARD</h1>
              <button
                className="header__logout-button scale-buttons"
                type="button"
              ></button>
            </div>
            <p className="header__text header__content_main">
              Добрый день, Евгений!
            </p>
          </>
        );

      case '/board':
        return(
          <>
            <div className="header__box">
              <h1 className="header__logo header__content_main">DESIGN WEEKLY</h1>
              <button
                className="header__logout-button scale-buttons"
                type="button"
              ></button>
            </div>
            <p className="header__text header__content_other">
              A board to keep track of design progress.
            </p>
          </>
        );

      case '/signin':
        return(
          <h1 className="header__logo header__content_main">Рады снова вас видеть!</h1>
        );

      case '/signup':
        return(
          <h1 className="header__logo header__content_main">Приветствуем нового пользователя!</h1>
        );

      default: return('');
    }
  }

  return(
    <>
      <header className="header">
        {handleHeaderLink()}
      </header>
    </>
  )
}

export default Header;
