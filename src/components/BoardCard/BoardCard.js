import React from "react";
import './BoardCard.css';

function BoardCard(props) {
  return(
    <>
      <article className="board-card buttons">
        <h3 className="board-card__name">
          {props.name}
        </h3>
      </article>
    </>
  )
}

export default BoardCard;
