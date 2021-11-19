import React from "react";

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="gameword">
      {selectedWord.split("").map((letter, i) => {
        return (
          <span className="gameletter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
