import React, { useEffect, useState } from "react";

const ProfileHead = (props) => {
    const [propsData, setPropsData] = useState({
        waits: 0,
        completes: 0,
        wrongs: 0,
    });
    const nowData = props.photoData;
    console.log(props.postState, "프롭스");

    useEffect(() => {
        const fetchData = async () => {
            try {
                // for (let i = 1; i < nowData.length; i++) {
                //     if (
                //         nowData[i].compliteAuth === false &&
                //         nowData[i].wrongAuth === false
                //     ) {
                //         setPropsData({
                //             ...propsData,
                //             waits: propsData.waits + 1,
                //         });
                //     }
                // }
                // props.photoData.map((rowData) => {
                //     if (rowData.photo === "") console.log("1번 떠야됨");
                //     if (
                //         rowData.compliteAuth === false &&
                //         rowData.wrongAuth === false
                //     ) {
                //         console.log(`${props.photoData.length - 1}번 떠야함`);
                //         setPropsData({
                //             ...propsData,
                //             waits: propsData.waits + 1,
                //         });
                //     }
                //     if (rowData.compliteAuth === true) {
                //         console.log("comAuth");
                //         setPropsData({
                //             ...propsData,
                //             compliteAuth: propsData.compliteAuth + 1,
                //         });
                //     }
                //     if (rowData.wrongAuth === true)
                //         setPropsData({
                //             ...propsData,
                //             wrongAuth: propsData.wrongAuth + 1,
                //         });
                // });
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
