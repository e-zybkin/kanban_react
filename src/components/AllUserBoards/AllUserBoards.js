import React from "react";
import './AllUserBoards.css';
import BoardCard from "../BoardCard/BoardCard";
import tests from "../../testData";

function AllUserBoards() {
  return(
    <>
      <div className="boards-container">
        <h2 className="boards-container__title">Ваши доски:</h2>
        <div className="boards-container__box">
          {tests.map((item, i) => (
            <BoardCard
              key={i}
              name={item.name}
            />
          ))}
        </div>
        <button
          type="button"
          className="boards-container__button shadow-buttons"
        ></button>
      </div>
    </>
  )
}

export default AllUserBoards;
