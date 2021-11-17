import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import AuthBoardComments from "./AuthBoardComments";
import Link from "@mui/material/Link";

export default function AuthBoardFeedsCard() {
    const user = useSelector((state) => state.user.userData);

    const [Data, setData] = useState([
        {
            authBody: "",
            photo: "",
            postedBy: "",
            likes: [],
            dislikes: [],
            comments: [],
        },
    ]);
    const [lastIdx, setLastIdx] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/api/authboard");

                const _Data = await res.data.resultAuthBoards.map(
                    (rowData) => (
                        setLastIdx(lastIdx + 1),
                        {
                            _id: rowData._id,
                            authBody: rowData.authBody,
                            photo: rowData.photo,
                            postedBy: rowData.postedBy.nickname,
                            likes: rowData.likes,
                            dislikes: rowData.dislikes,
                            comments: rowData.comments,
                        }
                    )
                );

                setData(Data.concat(_Data));
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const likePost = (id) => {
        axios
            .put("/api/authBoard/like", {
                postId: id,
            })
            // .then((res) => res.json())
            .then((result) => {})
            .catch((err) => {
                console.log(err);
            });
    };
    const dislikePost = (id) => {
        axios
            .put("/api/authBoard/dislike", {
                postId: id,
            })
            // .then((res) => res.json())
            .then((result) => {})
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <React.Fragment>
            {lastIdx !== 0 ? (
                Data.filter((data) => data.authBody !== "")
                    .filter((data) => data.postedBy !== user.nickname)
                    .map((rowData, index) => (
                        <Card sx={{ maxWidth: 600 }} key={index}>
                            <Link
                                href={`/profile/${rowData.postedBy}`}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="user">
                                            <img
                                                src="img/authBoard/abc.jpg"
                                                style={{
                                                    width: "40px",
                                                    height: "40px",
                                                }}
                                            />
                                        </Avatar>
                                    }
                                    title={rowData.postedBy}
                                    titleTypographyProps={{ variant: "h5" }}
                                />
                            </Link>
                            <CardMedia
                                component="img"
                                height="400"
                                image={rowData.photo}
                            />
                            <CardContent>
                                <Typography variant="h6" color="black">
                                    {rowData.authBody}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <div
                                    className="AuthBoard-like-btn"
                                    onClick={() => {
                                        likePost(rowData._id);
                                        window.location.reload();
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        className="AuthBoard-like-btn-area"
                                        style={{
                                            color: "black",
                                            background: "#ffffff",
                                            fontWeight: "600",
                                        }}
                                    >
                                        인증 {rowData.likes.length}
                                    </Button>
                                </div>
                                <div
                                    className="AuthBoard-dislike-btn"
                                    onClick={() => {
                                        dislikePost(rowData._id);
                                        window.location.reload();
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        className="AuthBoard-like-btn-area"
                                        style={{
                                            background: "#e80000",
                                            fontWeight: "600",
                                        }}
                                    >
                                        인증 미흡 {rowData.dislikes.length}
                                    </Button>
                                </div>
                            </CardActions>
                            <AuthBoardComments
                                authBoards={rowData._id}
                                commentsData={rowData.comments}
                            />
                        </Card>
                    ))
            ) : (
                <div style={{ textAlign: "center" }}>
                    <h1>Loading...</h1>
                </div>
            )}
        </React.Fragment>
    );
}
