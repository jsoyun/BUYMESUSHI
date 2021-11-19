import Letter from "./Letter";

export default function LetterGrid({ secreteWord, guessedLetters }) {
  let letters = secreteWord
    .split("") // ['R', 'e', 'a', 'c', 't'] 이런식
    .map((letter, index) => {
      let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
      console.log(isShown);
      return <Letter value={letter} isShown={isShown} key={index} />;
    });

  return <div className="flex">{letters}</div>;
}
