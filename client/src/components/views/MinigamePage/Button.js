import { useState } from "react";

export default function Button({ value }) {
  const [isClicked, setIsClicked] = useState(false);

  let className = "button";
  if (isClicked) {
    // className = className + "guessed";
    className += " guessed";
  }

  function clickHandler() {
    setIsClicked(true);
  }
  return (
    <button className={className} onClick={clickHandler}>
      {value}
    </button>
  );
}
