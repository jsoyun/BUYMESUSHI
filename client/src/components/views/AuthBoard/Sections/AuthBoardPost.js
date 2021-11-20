import axios from "axios";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

const AuthBoardPost = () => {
  const [Body, setBody] = useState("");
  const [Photo, setPhoto] = useState("");
  const [fileUrl, setFileUrl] = useState(null);

  //
  const [modal, setModal] = useState("");

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
    if (Body == "") {
      event.preventDefault();
      return alert("본문을 입력해 주세요!");
    } else if (Photo == "") {
      event.preventDefault();
      return alert("사진을 업로드 해주세요!");
    }

    let form = document.getElementById("authboard_post");
    let formData = new FormData(form);

    axios.post("/api/authBoard/post", formData).then((response) => {
      console.log(response.data);
      console.log("포스트 완료");
    });
  };

  // const Input = styled("input")({
  //     display: "none",
  // });

  //모달시도
  const onModalHandler = (event) => {
    setModal(event.currentTarget.value);

    function onClick() {
      document.querySelector(".modal_wrap").style.display = "block";
      document.querySelector(".black_bg").style.display = "block";
    }
    function offClick() {
      document.querySelector(".modal_wrap").style.display = "none";
      document.querySelector(".black_bg").style.display = "none";
    }

    document.getElementById("modal_btn").addEventListener("click", onClick);
    document.querySelector(".modal_close").addEventListener("click", offClick);

    console.log("찍히나?");
  };

  return (
    //모달 시도
    <div className="M_body">
      <button onClick={onModalHandler} type="button" id="modal_btn">
        모달띄우기
      </button>
      <div className="black_bg"></div>

      {/*  */}
      <div className="AuthBoardPost-container">
        <div className="modal_wrap">
          <div className="modal_close">
            <a href="#">close</a>
          </div>
          {/*  */}
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
                    placeholder="내용을 입력하세요"
                  />
                </div>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  component="label"
                  className="AuthBoardPost-Photo"
                  style={{
                    background: "#3b5998",
                  }}
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
                  style={{
                    background: "#3b5998",
                  }}
                >
                  제출
                </Button>
              </CardActions>
            </Card>
          </form>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default withRouter(AuthBoardPost);
