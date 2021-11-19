import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const MyPageAuth = (props) => {
    const user = useSelector((state) => state.user.userData);
    return (
        <div className="MyPageAuth-container">
            {/* <div className="MyPageAuth-header-container">
                <div className="MyPageAuth-header-column">
                    <img
                        className="MyPageAuth-profileImg"
                        src="/img/profile/defaultProfile.png"
                    />
                </div>
                <div className="MyPageAuth-header-column">profile</div>
            </div> */}
            <div>
                <div className="Profile-header">
                    <div className="Profile-column">
                        <img
                            className="Profile-img"
                            src="/img/profile/144img.png"
                        />
                    </div>
                    <div className="Profile-column">
                        <div className="Profile-title">{user.nickname}</div>
                        <div className="Profile-states">
                            <div className="Profile-state">
                                <span className="Profile-state-qty">
                                    {props.postState.waits}
                                </span>{" "}
                                대기
                            </div>
                            <div className="Profile-state">
                                <span className="Profile-state-qty">
                                    {props.postState.completes}
                                </span>{" "}
                                완료
                            </div>
                            <div className="Profile-state">
                                <span className="Profile-state-qty">
                                    {props.postState.wrongs}
                                </span>{" "}
                                거절
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MyPageAuth-body-container">
                {" "}
                <div className="Profile-body-container">
                    <div className="Profile-body-subtitle">
                        대기중인 인증 게시글
                    </div>
                    <div className="Profile-body-photos">
                        {props.photoData
                            .filter((data) => data.photo !== "")
                            .filter((data) => data.compliteAuth == false)
                            .filter((data) => data.wrongAuth == false)
                            .map((rowData, index) => (
                                <div className="Profile-body-photo" key={index}>
                                    <img src={rowData.photo} />
                                </div>
                            ))}
                    </div>
                    <div className="Profile-body-subtitle">
                        인증 완료 게시글
                    </div>
                    <div className="Profile-body-photos">
                        {props.photoData
                            .filter((data) => data.photo !== "")
                            .filter((data) => data.compliteAuth == true)
                            .filter((data) => data.wrongAuth == false)
                            .map((rowData, index) => (
                                <div className="Profile-body-photo" key={index}>
                                    <img src={rowData.photo} />
                                </div>
                            ))}
                    </div>
                    <div className="Profile-body-subtitle">
                        인증 거절 게시글
                    </div>
                    <div className="Profile-body-photos">
                        {props.photoData
                            .filter((data) => data.photo !== "")
                            .filter((data) => data.compliteAuth == false)
                            .filter((data) => data.wrongAuth == true)
                            .map((rowData, index) => (
                                <div className="Profile-body-photo" key={index}>
                                    <img src={rowData.photo} />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPageAuth;
