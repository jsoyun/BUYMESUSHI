import React from "react";
import GameBoard from "./GameBoard";

function Hangman() {
  return (
    <div>
      <h1>Welcome to Hangman!</h1>
      <p>Do you want to play game?</p>

      <GameBoard secreteWord="React" />
    </div>
  );
}

export default Hangman;
