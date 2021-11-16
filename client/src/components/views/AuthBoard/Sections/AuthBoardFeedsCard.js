import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
//import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useSelector } from 'react-redux';

export default function AuthBoardFeedsCard() {
    const user = useSelector((state) => state.user.userData);

    const [Data, setData] = useState([
        {
            authBody:
                'UsEarth에 오신것을 환연합니다! 많은 인증 사진들이 당신의 선택을 기다리고 있습니다! 참여 부탁드려요 ',
            photo: 'img/authBoard/iwantyou.jpg',
            postedBy: 'Admin',
            likes: ['1'],
            dislikes: ['1'],
        },
    ]);
    const [lastIdx, setLastIdx] = useState(0);
    const [PostUpId, setPostUpId] = useState('');

    const onThumbUpHandler = () => {
        axios
            .post('/api/authBoard/like', { PostId: PostUpId })
            .then((res) => console.log(res.data));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/authboard');
                console.log(res.data.authBoards);

                const _Data = await res.data.authBoards.map(
                    (rowData) => (
                        setLastIdx(lastIdx + 1),
                        {
                            _id: rowData._id,
                            authBody: rowData.authBody,
                            photo: rowData.photo,
                            postedBy: rowData.postedBy.nickname,
                            likes: rowData.likes,
                            dislikes: rowData.dislikes,
                        }
                    )
                );
                setData(Data.concat(_Data));

                onThumbUpHandler();
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [PostUpId]);

    const likePost = (id) => {
        axios
            .put('/api/authBoard/like', {
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
            .put('/api/authBoard/dislike', {
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
                Data.map((rowData, index) => (
                    <Card sx={{ maxWidth: 600 }} key={index}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="user">
                                    <img
                                        src="img/authBoard/abc.jpg"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                        }}
                                    />
                                </Avatar>
                            }
                            title={rowData.postedBy}
                            titleTypographyProps={{ variant: 'h5' }}
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
                        <div>좋아요{rowData.likes.length}</div>
                        <div>싫어요{rowData.dislikes.length}</div>
                        <CardActions disableSpacing>
                            <div
                                className="AuthBoard-like-btn"
                                onClick={() => {
                                    likePost(rowData._id);
                                }}
                                // onClick={onThumbUpHandler}
                            >
                                <IconButton>
                                    <ThumbUpOffAltIcon />
                                </IconButton>
                            </div>
                            <div
                                className="AuthBoard-dislike-btn"
                                onClick={() => {
                                    dislikePost(rowData._id);
                                }}
                                // onClick={onThumbUpHandler}
                            >
                                <IconButton type="submit">
                                    <ThumbDownOffAltIcon />
                                </IconButton>
                            </div>

                            <div
                                className="AuthBoardFeedsId"
                                style={{ display: 'none' }}
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
