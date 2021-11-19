import { useState } from "react";
import "./Hangman.css";
import LetterGrid from "./LetterGrid";
import ButtonGrid from "./ButtonGrid";

export default function GameBoard({ secreteWord }) {
  const [guessedLetters, setGuessedLetters] = useState([]);

  const letterGuessedHandler = function (letter) {
    let val = letter.toLowerCase();
    setGuessedLetters((prev) => [...prev, val]); // arrow functoin, spread operator
  };

  return (
    <div className="GameContainer">
      <LetterGrid secreteWord={secreteWord} guessedLetters={guessedLetters} />
      <ButtonGrid letterGuessed={letterGuessedHandler} />
    </div>
  );
}
