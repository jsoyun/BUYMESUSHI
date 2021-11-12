import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const AuthBoardFeed = () => {
    const dispatch = useDispatch();
    const [Data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("/api/authboard")
            .then((response) => {
                //console.log(response.data);
            })
            .catch((err) => console.error(err));
    }, []);
    return <div></div>;
};

export default AuthBoardFeed;
