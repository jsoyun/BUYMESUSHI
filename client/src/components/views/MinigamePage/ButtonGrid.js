import Button from "./Button";

export default function () {
  let letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let buttons = letters.map(letter, index) => (
      <button>
          
          </button>
  )
  return (
      <div>
          {letters}
      </div>
  )
}
