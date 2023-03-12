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
            <h1 className="header__logo header__content_main">KANBAN BOARD</h1>
            <p className="header__text header__content_main">
              Добрый день, Евгений!
            </p>
          </>
        );

      case '/board':
        return(
          <>
            <h1 className="header__logo header__content_other">Design weekly</h1>
            <p className="header__text header__content_other">
              A board to keep track of design progress.
            </p>
          </>
        );

      case 'sign-in':
        return(
          <></>
        );

      case 'sign-up':
        return(
          <></>
        );

      default:
        return(
          <>
            <h1 className="header__logo">KANBAN BOARD</h1>
          </>
        );
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
