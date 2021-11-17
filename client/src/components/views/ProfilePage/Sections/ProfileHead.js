import React from "react";

const ProfileHead = () => {
    return (
        <div>
            <div className="Profile-header">
                <div className="Profile-column">이미지 자리</div>
                <div className="Profile-column">
                    <div className="Profile-title">닉네임 자리</div>
                    <div className="Profile-states">
                        <div className="Profile-state">waits</div>
                        <div className="Profile-state">approvals</div>
                        <div className="Profile-state">rejections</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHead;
