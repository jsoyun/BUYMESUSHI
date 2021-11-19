import "./Hangman.css";
import LetterGrid from "./LetterGrid";
import ButtonGrid from "./ButtonGrid";

export default function GameBoard({ secreteWord }) {
  return (
    <div className="GameContainer">
      <LetterGrid secreteWord={secreteWord} guessedLetters={("a", "r")} />
      <ButtonGrid />
    </div>
  );
}
