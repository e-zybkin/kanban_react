import React from "react";
import './AuthPage.css';
import { Link, useLocation } from "react-router-dom";

function AuthPage(props) {
  const location = useLocation();

  function handleAuthButton() {
    switch(location.pathname) {
      case '/signin':
        return(
          <div className="auth-link">
            <p className="auth-link__text">Ещё не зарегистрированы?</p>
            <Link
              to="/signup"
              className="auth-link__button"
            >Зарегистрироваться</Link>
          </div>
        );

      case '/signup':
        return(
          <div>
            <p className="auth-link__text">Уже зарегистрированы?</p>
            <Link
              to="/signin"
              className="auth-link__button"
            >Войти</Link>
          </div>
        );

      default: return('');
    }
  }

  return(
    <section className="auth-page">
      <form
        className=""
        name=""
        //onSubmit={}
      >
        {props.children}
        <div className="auth-page__sub-box">
          <span className="auth-page__after-sub">

          </span>
          <button
            className=""
            type="submit"
          >
            {props.submitText}
          </button>
        </div>
      </form>
      {handleAuthButton()}
    </section>
  )
}

export default AuthPage;
