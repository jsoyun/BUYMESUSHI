import { useState } from "react";

export default function Button({ value, onClick }) {
  const [isClicked, setIsClicked] = useState(false);

  let className = "button";
  if (isClicked) {
    // className = className + "guessed";
    className += " guessed";
  }

  function clickHandler() {
    setIsClicked(true);
    onClick(value);
  }
  return (
    <div className="Btn">
      <button className={className} onClick={clickHandler}>
        {value}
      </button>
    </div>
  );
}
