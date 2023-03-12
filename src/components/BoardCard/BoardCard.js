import React from "react";
import './BoardCard.css';
import { Link } from "react-router-dom";

function BoardCard(props) {
  const func = (event) => {
    event.preventDefault();
    console.log(1)
  }

  return(
    <>
    <Link
      to="/board"
      className="boards-container__card-link"
    >
      <article className="board-card shadow-buttons">
        <h3 className="board-card__name">
          {props.name}
        </h3>
        <button
          className="board-card__button board-card__button_type_edit scale-buttons"
          type="button"
          onClick={func}
        ></button>
        <button
          className="board-card__button board-card__button_type_del scale-buttons"
          type="button"
          onClick={func}
        ></button>
      </article>
    </Link>
    </>
  )
}

export default BoardCard;
