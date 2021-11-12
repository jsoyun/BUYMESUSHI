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
            const res = await axios
                .get("/api/authboard")
                .then((response) => {
                    console.log(response.data);
                })
                .catch((err) => console.error(err));
            // console.log(res);

            const _Data = await res.map((rowData) => ({
                authBody: rowData.authBody,
                photo: rowData.photo,
                postedBy: rowData.postedBy,
            }));
            setData(Data.concat(_Data));
        } catch (error) {
            console.error(error);
        }
    }, []);
    // console.log(Data);
    return (
        <div>
            asdf
            <img src="img/authBoard/abc.jpg" style={{ width: "150px" }} />
        </div>
    );
};

export default AuthBoardFeeds;
