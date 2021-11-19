import LetterGrid from "./LetterGrid";

export default function GameBoard({ secreteWord }) {
<<<<<<< HEAD
  return <LetterGrid secreteWord={secreteWord} guessedLetters={("a", "r")} />;
=======
  return (
    <div>
      <LetterGrid secreteWord={secreteWord} guessedLetters={("a", "r")} />
      <ButtonGrid />
    </div>
  );
>>>>>>> parent of 7f5823d (미니게임 페이지 진행중)
}
