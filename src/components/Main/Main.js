import React from "react";
import './Main.css';
import Header from '../Header/Header';
import AllUserBoards from '../AllUserBoards/AllUserBoards';

function Main() {
  return(
    <>
      <Header />
      <main>
        <AllUserBoards />
      </main>
    </>
  )
}

export default Main;
