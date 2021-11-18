import React, { useEffect, useState } from 'react';

const ProfileBody = (props) => {
    return (
        <div className="Profile-body-container">
            <div className="Profile-body-subtitle">대기중인 인증 게시글</div>
            <div className="Profile-body-photos">
                {props.photoData
                    .filter((data) => data.photo !== '')
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
                    .filter((data) => data.photo !== '')
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
                    .filter((data) => data.photo !== '')
                    .filter((data) => data.compliteAuth == false)
                    .filter((data) => data.wrongAuth == true)
                    .map((rowData, index) => (
                        <div className="Profile-body-photo" key={index}>
                            <img src={rowData.photo} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ProfileBody;
