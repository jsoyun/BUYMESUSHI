import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const AuthBoardFeeds = () => {
    const dispatch = useDispatch();
    const [Data, setData] = useState([
        {
            authBody: "",
            photo: "",
            postedBy: "",
        },
    ]);
    useEffect(async () => {
        try {
            const res = await axios.get("/api/authboard");

            const _Data = await res.data.authBoards.map((rowData) => ({
                authBody: rowData.authBody,
                photo: rowData.photo,
                postedBy: rowData.postedBy,
            }));

            setData(Data.concat(_Data));
        } catch (error) {
            console.error(error);
        }
    }, []);
    console.log(Data);
    // console.log(Data);
    return (
        <div>
            <img src="img/authBoard/abc.jpg" style={{ width: "150px" }} />
        </div>
    );
};

export default AuthBoardFeeds;
