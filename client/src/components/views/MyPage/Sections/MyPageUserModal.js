import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { withRouter } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";

const Container = styled.div`
    width: 80%;
    display: block;
    margin: 0 auto;
`;

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

const ApiButton = styled(Button)({
    backgroundColor: "#3b5998",
});

const MyPageUserModal = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [Photo, setPhoto] = useState("");
    const [fileUrl, setFileUrl] = useState(null);

    const onPhotoHandler = (event) => {
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);

        setFileUrl(imageUrl);
        setPhoto(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        if (Photo == "") {
            event.preventDefault();
            return alert("사진을 업로드 해주세요!");
        }

        let form = document.getElementById("MyPageUserModal_imgForm");
        let formData = new FormData(form);
        console.log(formData.profilePhoto);

        axios.put("/api/mypage/userImage", formData).then((response) => {
            console.log(response.data);
            console.log("포스트 완료");
        });
    };

    return (
        <>
            <img
                className="Profile-img"
                src={props.userImage}
                onClick={() => setModalIsOpen(true)}
            />
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <CloseIcon
                    onClick={() => setModalIsOpen(false)}
                    color="action"
                    fontSize="large"
                    cursor="pointer"
                ></CloseIcon>
                <Container>
                    <CardMedia
                        className="MyPageUserImg"
                        component="img"
                        image={fileUrl}
                    />
                    <form
                        onSubmit={onSubmitHandler}
                        encType="multipart/form-data"
                        id="MyPageUserModal_imgForm"
                    >
                        <Button
                            variant="contained"
                            component="label"
                            className="AuthBoardPost-Photo"
                        >
                            Upload Image
                            <input
                                id="input-image"
                                type="file"
                                name="profilePhoto"
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
                    </form>
                </Container>
            </Modal>
        </>
    );
};

export default withRouter(MyPageUserModal);
