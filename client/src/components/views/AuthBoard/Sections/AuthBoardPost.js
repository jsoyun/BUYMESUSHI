import axios from 'axios';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

const AuthBoardPost = () => {
    const [Body, setBody] = useState('');
    const [Like, setLike] = useState(null);
    //const [Comment, setComment] = useState("");
    const [Photo, setPhoto] = useState('');

    const [fileUrl, setFileUrl] = useState(null);

    const onBodyHandler = (event) => {
        setBody(event.currentTarget.value);
    };

    const onPhotoHandler = (event) => {
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);

        setFileUrl(imageUrl);
        setPhoto(event.currentTarget.value);
    };

    // const setBodyClear = () => {
    //     setBody("");
    // };

    const onSubmitHandler = (event) => {
        if (Body == '') {
            event.preventDefault();
            return alert('본문을 입력해 주세요!');
        } else if (Photo == '') {
            event.preventDefault();
            return alert('사진을 업로드 해주세요!');
        }
        let form = document.getElementById('authboard_post');
        let formData = new FormData(form);
        event.preventDefault();

        axios.post('/api/authBoard/post', formData).then((response) => {
            console.log(response.data);
            console.log('포스트 완료');
        });
    };

    // const Input = styled("input")({
    //     display: "none",
    // });

    return (
        <div className="AuthBoardPost-container">
            <form
                onSubmit={onSubmitHandler}
                encType="multipart/form-data"
                id="authboard_post"
            >
                <Card sx={{ maxWidth: 600 }}>
                    <CardMedia
                        className="AuthBoardPost-photoPlace"
                        component="img"
                        height="400"
                        image={fileUrl}
                    />
                    <CardContent>
                        <div className="AuthBoardPost-Body-area">
                            <input
                                className="AuthBoardPost-Body"
                                type="text"
                                name="authBody"
                                value={Body}
                                onChange={onBodyHandler}
                            />
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            component="label"
                            className="AuthBoardPost-Photo"
                        >
                            Upload Image
                            <input
                                id="input-image"
                                type="file"
                                name="authBoardPhoto"
                                value={Photo}
                                onChange={onPhotoHandler}
                                hidden
                            />
                        </Button>
                        <Button
                            variant="contained"
                            type="submit"
                            className="AuthBoardPost-submit-btn"
                        >
                            제출
                        </Button>
                    </CardActions>
                </Card>
            </form>

            {/* <React.Fragment>
                <div className="AuthBoardPost-photoPlace">
                    <img src={fileUrl} />
                </div>
                <form
                    onSubmit={onSubmitHandler}
                    encType="multipart/form-data"
                    id="authboard_post"
                >
                    <div className="AuthBoardPost-Body-area">
                        <input
                            className="AuthBoardPost-Body"
                            type="text"
                            name="authBody"
                            value={Body}
                            onChange={onBodyHandler}
                        />
                    </div>
                    <div className="AuthBoardPost-submit-area">
                        <Button
                            variant="contained"
                            component="label"
                            className="AuthBoardPost-Photo"
                        >
                            Upload Image
                            <input
                                id="input-image"
                                type="file"
                                name="authBoardPhoto"
                                value={Photo}
                                onChange={onPhotoHandler}
                                hidden
                            />
                        </Button>
                        <Button
                            variant="contained"
                            type="submit"
                            className="AuthBoardPost-submit-btn"
                        >
                            제출
                        </Button>
                    </div>
                </form>
            </React.Fragment> */}
        </div>
    );
};

export default withRouter(AuthBoardPost);
