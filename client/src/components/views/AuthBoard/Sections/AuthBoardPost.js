import axios from "axios";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Modal from "react-modal";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CloseIcon from "@mui/icons-material/Close";
import { borderRadius } from "@mui/system";
import { red } from "@mui/material/colors";

const customStyles = {
  content: {
    width: "600px",
    height: "600px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    position: "fixed",
    // top: "0",
    // left: "0",
    // right: "0",
    // bottom: "0",
    backgroundColor: "rgba(118, 135, 163, 0.75)",
  },
};

const MyButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 20%, #3b5998 90%);
  &:hover {
    background: linear-gradient(45deg, #3b5998 20%, #fe6b8b 90%);
  }
  border: 0;
  border-radius: 3px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  color: white;
  height: 48px;
  padding: 0 30px;
  /* align-items: center;
  justify-content: center; */

  margin: 0 auto;
  display: block;
`;

const AuthBoardPost = () => {
  const [Body, setBody] = useState("");
  const [Photo, setPhoto] = useState("");
  const [fileUrl, setFileUrl] = useState(null);

  //
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [modal, setModal] = useState("");

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

  return (
    //모달 시도
    <div className="M_body">
      <div className="MyButton_css">
        <MyButton onClick={() => setModalIsOpen(true)}>지키미 올리기</MyButton>
      </div>

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={() => setModalIsOpen(false)}
        className="AuthBoardPost-container"
      >
        <CloseIcon
          onClick={() => setModalIsOpen(false)}
          color="action"
          fontSize="large"
          cursor="pointer"
        ></CloseIcon>

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
      </Modal>
    </div>
  );
};

export default withRouter(AuthBoardPost);
