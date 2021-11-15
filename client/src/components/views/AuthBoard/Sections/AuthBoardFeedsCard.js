import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

export default function AuthBoardFeedsCard() {
    const [Data, setData] = useState([
        {
            authBody:
                "UsEarth에 오신것을 환연합니다! 많은 인증 사진들이 당신의 선택을 기다리고 있습니다! 참여 부탁드려요 ",
            photo: "img/authBoard/iwantyou.jpg",
            postedBy: "Admin",
        },
    ]);
    const [lastIdx, setLastIdx] = useState(0);
    const [PostUpId, setPostUpId] = useState("");

    const onPostUpIdHandler = (e) => {
        setPostUpId(e.rowData._id);
    };
    console.log(PostUpId);

    const onThumbUpHandler = () => {
        // axios.get(`/api/authBoard/like/${postUpId}`);
    };

    useEffect(async () => {
        try {
            const res = await axios.get("/api/authboard");

            const _Data = await res.data.authBoards.map(
                (rowData) => (
                    setLastIdx(lastIdx + 1),
                    {
                        _id: rowData._id,
                        authBody: rowData.authBody,
                        photo: rowData.photo,
                        postedBy: rowData.postedBy.nickname,
                    }
                )
            );

            setData(Data.concat(_Data));
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <React.Fragment>
            {lastIdx !== 0 ? (
                Data.map((rowData, index) => (
                    <Card sx={{ maxWidth: 600 }} key={index}>
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
                        <CardMedia
                            component="img"
                            height="500"
                            image={rowData.photo}
                        />
                        <CardContent>
                            <Typography variant="h6" color="text.secondary">
                                {rowData.authBody}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton
                                onClick={() => {
                                    setPostUpId(rowData._id);
                                }}
                            >
                                <ThumbUpOffAltIcon />
                            </IconButton>
                            <IconButton type="submit">
                                <ThumbDownOffAltIcon />
                            </IconButton>
                            <div
                                className="AuthBoardFeedsId"
                                style={{ display: "none" }}
                            >
                                {rowData._id}
                            </div>
                        </CardActions>
                    </Card>
                ))
            ) : (
                <div>
                    <h1>작성된 글이 없음.</h1>
                </div>
            )}
        </React.Fragment>
    );
}
