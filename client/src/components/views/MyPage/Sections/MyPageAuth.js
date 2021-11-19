import React from "react";
import { useSelector } from "react-redux";

const MyPageAuth = () => {
    const user = useSelector((state) => state.user.userData);
    console.log(user);
    return (
        <div className="MyPageAuth-container">
            컨테이너
            <div className="MyPageAuth-header-container">
                <div className="MyPageAuth-header-column">
                    <img src={"/img/profile/defaultProfile.png"} />
                </div>
                <div className="MyPageAuth-header-column">profile</div>
            </div>
            <div className="MyPageAuth-body-container">mypageauth-body</div>
        </div>
    );
};

export default MyPageAuth;
