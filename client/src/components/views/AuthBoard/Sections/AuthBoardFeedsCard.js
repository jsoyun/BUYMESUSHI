import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export default function AuthBoardFeedsCard() {
    const [Data, setData] = useState([
        {
            authBody: "",
            photo: "",
            postedBy: "",
        },
    ]);
    const [lastIdx, setLastIdx] = useState(0);
    useEffect(async () => {
        try {
            const res = await axios.get("/api/authboard");

            const _Data = await res.data.authBoards.map(
                (rowData) => (
                    setLastIdx(lastIdx + 1),
                    {
                        authBody: rowData.authBody,
                        photo: rowData.photo,
                        postedBy: rowData.postedBy,
                    }
                )
            );

            setData(Data.concat(_Data));
            console.log("useEffect 안 : ", Data);
        } catch (error) {
            console.error(error);
        }
    }, []);
    console.log("useEffect 밖 : ", Data[1]);

    return (
        <React.Fragment>
            {lastIdx !== 0 ? (
                Data.map((rowData) => (
                    <Card sx={{ maxWidth: 600 }}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    sx={{ bgcolor: red[500] }}
                                    aria-label="user"
                                >
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
                        />
                        <CardMedia
                            component="img"
                            height="400"
                            image={rowData.photo}
                        />
                        <CardContent>
                            <Typography variant="h6" color="text.secondary">
                                {rowData.authBody}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                        {console.log("return 안 : ", Data)}
                    </Card>
                ))
            ) : (
                <div>
                    <h1>작성된 글이 없음.</h1>
                </div>
            )}
            {/* <Card sx={{ maxWidth: 600 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="user">
                            <img
                                src="img/authBoard/abc.jpg"
                                style={{ width: "40px", height: "40px" }}
                            />
                        </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                />
                <CardMedia
                    component="img"
                    height="400"
                    image="img/authBoard/abc.jpg"
                />
                <CardContent>
                    <Typography variant="h6" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun
                        meal to cook together with your guests. Add 1 cup of
                        frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
                {console.log("return 안 : ", Data)}
            </Card> */}
        </React.Fragment>
    );
}
