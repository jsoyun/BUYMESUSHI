import Letter from "./Letter";

export default function LetterGrid({ secreteWord, guessedLetters }) {
  let letters = secreteWord.split("").map((letter, index) => {
    let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
    console.log(isShown);
    return <Letter value={letter} isShown={isShown} key={index} />;
  });

  return <div className="flex">{letters}</div>;
}
