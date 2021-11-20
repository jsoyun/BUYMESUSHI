import React, { useEffect, useState } from "react";
import axios from "axios";
import { checkWin } from "./helpers/helpers";
import { useSelector } from "react-redux";

const Popup = ({
    correctLetters,
    wrongLetters,
    selectedWord,
    setPlayable,
    playAgain,
}) => {
    // const user = useSelector((state) => state.user.userData);
    // const [userData, setUserData] = useState("");
    let finalMessage = "";
    let finalMessageRevealWord = "";
    let playable = true;

    // setUserData(user._id);

    if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
        finalMessage = "축하합니다! 이겼습니다! 😃";
        playable = false;

        const plusPoint = async () => {
            await axios.put("/api/minigame").then(console.log("몇번 일어남"));
        };
        plusPoint();
    } else if (
        checkWin(correctLetters, wrongLetters, selectedWord) === "lose"
    ) {
        finalMessage = "아쉽게도 졌습니다. 😕";
        finalMessageRevealWord = `정답은: ${selectedWord}`;
        playable = false;
    }

    useEffect(() => {
        setPlayable(playable);
    }, []);

    return (
        <div
            className="popup-container"
            style={finalMessage !== "" ? { display: "flex" } : {}}
        >
            <div className="popup">
                <h2>{finalMessage}</h2>
                <h3>{finalMessageRevealWord}</h3>
                <button onClick={playAgain}>재실행</button>
            </div>
        </div>
    );
};

export default Popup;
