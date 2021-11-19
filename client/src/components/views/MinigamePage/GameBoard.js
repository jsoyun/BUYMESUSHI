import LetterGrid from "./LetterGrid";

export default function GameBoard({ secreteWord }) {
  return <LetterGrid secreteWord={secreteWord} guessedLetters={("a", "r")} />;
}
