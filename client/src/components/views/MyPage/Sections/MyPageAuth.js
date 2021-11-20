import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import MyPageUserModal from "./MyPageUserModal";

const MyPageAuth = (props) => {
    return (
        <div className="MyPageAuth-container">
            <div className="MyPageAuth-header-container">
                <div className="MyPageAuth-header-column">
                    <MyPageUserModal userImage={props.userData.userImage} />
                </div>
                <div className="MyPageAuth-header-column">
                    <div className="MyPageAuth-header-title">
                        {props.userData.nickname}
                    </div>
                    <div className="MyPageAuth-header-states">
                        <div className="MyPageAuth-header-state">
                            <span className="MyPageAuth-header-states-qty">
                                {props.postState.waits}
                            </span>{" "}
                            대기
                        </div>
                        <div className="MyPageAuth-header-state">
                            <span className="MyPageAuth-header-states-qty">
                                {props.postState.completes}
                            </span>{" "}
                            완료
                        </div>
                        <div className="MyPageAuth-header-state">
                            <span className="MyPageAuth-header-states-qty">
                                {props.postState.wrongs}
                            </span>{" "}
                            거절
                        </div>
                    </div>
                </div>
            </div>

            <div className="MyPageAuth-body-container">
                {" "}
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
                <div className="Profile-body-subtitle">인증 완료 게시글</div>
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
                <div className="Profile-body-subtitle">인증 거절 게시글</div>
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
    );
};

export default MyPageAuth;
