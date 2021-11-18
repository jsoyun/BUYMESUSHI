import React, { useEffect, useState } from 'react';

const ProfileHead = (props) => {
    console.log(props, '프롭스 데이타!');
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
                            <span className="Profile-state-qty">3</span> 대기
                        </div>
                        <div className="Profile-state">
                            <span className="Profile-state-qty">5</span> 완료
                        </div>
                        <div className="Profile-state">
                            <span className="Profile-state-qty">6</span> 거절
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHead;
