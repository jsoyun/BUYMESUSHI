import axios from "axios";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

const AuthBoardPost = () => {
    const [Body, setBody] = useState("");
    const [Like, setLike] = useState(null);
    const [Comment, setComment] = useState("");
    const [Photo, setPhoto] = useState("");

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

    const setBodyClear = () => {
        setBody("");
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // var newPath = Photo.replace('C:\\fakepath\\', '');
        // console.log(newPath);

        // let form = document.getElementById('authBoardPhoto');
        // let formData = new FormData(form);

        let form = document.getElementById("authboard_post");
        let formData = new FormData(form);

        axios.post("/api/authBoard/post", formData).then((response) => {
            console.log(response.data);
            console.log("포스트 완료");
        });

        // let body = {
        //     body: Body,
        //     photo: Photo,
        // };

        //        console.log(Photo);
        // dispatch(postAuthBoard(body)).then((response) => {
        //     //console.log(response);
        //     if (response.payload.postAuthBoard) {
        //         if (response.payload.postAuthBoard) {
        //             props.history.push("/authboard");
        //             setBodyClear();
        //         } else {
        //             console.log("post fail!!!");
        //             alert("post fail!!! check description and picture!");
        //         }
        //     } else {
        //         console.error("error");
        //     }
        // });
    };
    return (
        <div>
            <React.Fragment>
                <h1>지키미인증 페이지asdf</h1>
                <form
                    onSubmit={onSubmitHandler}
                    encType="multipart/form-data"
                    id="authboard_post"
                >
                    본문 :{" "}
                    <input
                        type="text"
                        name="authBody"
                        value={Body}
                        onChange={onBodyHandler}
                    />
                    파일 업로드 :
                    <input
                        id="input-image"
                        type="file"
                        name="authBoardPhoto"
                        value={Photo}
                        onChange={onPhotoHandler}
                    />
                    <button type="submit">제출 </button>
                </form>
                <div
                    style={{
                        backgroundColor: "#efefef",
                        width: "150px",
                        height: "150px",
                    }}
                >
                    <img
                        src={fileUrl}
                        style={{ width: "150px", height: "150px" }}
                    />
                </div>
            </React.Fragment>
        </div>
    );
};

export default withRouter(AuthBoardPost);
