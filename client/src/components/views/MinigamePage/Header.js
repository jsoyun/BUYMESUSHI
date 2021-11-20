import React from "react";

// rafce
const Header = () => {
    return (
        <div className="gameHeader">
            <h3>
                usEarth에 오신것을 환영합니다. 지금부터 Hangman게임을
                시작합니다.
            </h3>
            <p>게임의 룰은 단어를 맞추는 것이고 제한횟수는 단 7회입니다.</p>
            <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEwMjNfMTgz%2FMDAxNjM0OTY2ODQ1NjAw.t21bkEUtgMj0wC8-RxJVkOY7e2P_MJwhdTOAfXWJbigg.KYARx0HDWgVHzgONIwyMHn9fvUjY8eWCQh3Jp0634OEg.PNG.ergjsa1403%2F20211023142650.png&type=sc960_832"
                alt="사행성조작"
                width="400px"
            />
            {/* <img src="" alt="MDN logo" /> */}
            <p>한 번 이길 때마다 포인트를 드리겠습니다.</p>
        </div>
    );
};

export default Header;
