import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const ariaLabel = { "aria-label": "description" };

export default function AuthBoardComments({ authBoards, commentsData }) {
    const user = useSelector((state) => state.user.userData);
    const [comments, setComments] = useState([]);

    const onCommentsHandler = (e) => {
        setComments(e.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        if (comments == "") {
            event.preventDefault();
            return alert("내용을 입력해 주세요!");
        }

        let body = {
            comments: comments,
            authBoardId: authBoards,
        };

        axios.post("/api/authBoard/comments", body).then((response) => {
            console.log("댓글 등록 완료");
        });
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await axios.get("/api/authboard");
    //             // console.log(res.data.resultAuthBoards);

    //             const _Data = await res.data.resultAuthBoards.map(
    //                 (rowData) => ({
    //                     comment: rowData.comments,
    //                     // _id: rowData._id,
    //                     // authBody: rowData.authBody,
    //                     // photo: rowData.photo,
    //                     // postedBy: rowData.postedBy.nickname,
    //                     // likes: rowData.likes,
    //                     // dislikes: rowData.dislikes,
    //                 })
    //             );
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    return (
        <React.Fragment>
            {commentsData.map((rowData, index) => (
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 600,
                        bgcolor: "background.paper",
                    }}
                    key={index}
                >
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                // 댓글 아바타 이미지 rowData.postedBy.userPhoto
                                src="/img/usEarth.png"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        <a
                                            href={`/profile/${rowData.postedBy.nickname}`}
                                            style={{
                                                textDecoration: "none",
                                                color: "black",
                                            }}
                                        >
                                            {rowData.postedBy.nickname}
                                        </a>
                                    </Typography>
                                </React.Fragment>
                            }
                            secondary={rowData.text}
                        />
                    </ListItem>
                </List>
            ))}
            <div className="authboard-commentPost-container">
                <Avatar alt="Remy Sharp" src="/img/usEarth.png" />
                <form onSubmit={onSubmitHandler} id="authboard_commentPost">
                    <Input
                        type="text"
                        name="authComment"
                        value={comments}
                        onChange={onCommentsHandler}
                        inputProps={ariaLabel}
                        sx={{ ml: 2, mt: 2, mr: 2 }}
                        style={{ width: "430px" }}
                    />
                    {/* <input
                        type="text"
                        name="authComment"
                        value={comments}
                        onChange={onCommentsHandler}
                    /> */}
                    <input
                        name="authBoardsId"
                        type="text"
                        value={authBoards}
                        hidden
                        readOnly
                    />
                    <Button variant="outlined" type="submit">
                        게시
                    </Button>
                </form>
            </div>
        </React.Fragment>
    );
}
