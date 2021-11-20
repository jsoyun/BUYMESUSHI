import React, { useEffect, useState } from "react";

const ProfileHead = (props) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [props.photoData]);

    return (
        <div>
            <div className="Profile-header">
                <div className="Profile-column">
                    <img
                        className="Profile-img"
                        src="/img/profile/144img.png"
                    />
                </div>
                <div className="Profile-column">
                    <div className="Profile-title">{props.userData}</div>
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
    );
};

export default ProfileHead;
