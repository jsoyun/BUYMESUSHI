import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./BoardWrite.css";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 50%;
  overflow: hidden;
  outline: none;
  border: none;
`;

function BoardWrite() {
  const [Title, setTitle] = useState("");
  const [Body, setBody] = useState("");
  const [Img, setImg] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);

  const onTitleHandler = (event) => {
    setTitle(event.currentTarget.value);
  };
  const onBodyHandler = (event) => {
    setBody(event.currentTarget.value);
  };

  console.log(Body, "바디");
  console.log(Title, "타이틀");

  const onSubmitHandler = (event) => {
    if (Title === "") {
      event.preventDefault();
      return alert("제목이나 내용이 빈 채로 게시할 수 없습니다.");
    } else if (Body === "") {
      event.preventDefault();
      return alert("제목이나 내용이 빈 채로 게시할 수 없습니다.");
    }

    axios.post("/api/board/write", { Body, Title }).then((response) => {
      console.log(response.data);
      console.log("글쓰기 성공");
    });
  };

  return (
    <div>
      <form
        id="comment-form"
        onSubmit={onSubmitHandler}
        encType="multipart/form-data"
      >
        <div className="form">
          <div className="wrapper">
            <div className="header">
              <span className="title1">게시글 작성</span>
            </div>
            <div className="content">
              <div className="half">
                <div className="title">
                  <label htmlFor="title">
                    제 목 <span className="point">*</span>
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    onChange={onTitleHandler}
                    value={Title}
                    placeholder="제목은 필수입력 사항입니다."
                  />
                </div>
                <div className="action">
                  <button
                    className="btn_jc"
                    type="submit"
                    onClick={() => setModalIsOpen(false)}
                  >
                    제 출
                  </button>
                </div>
              </div>
              <div className="half">
                <div className="content">
                  <label htmlFor="comment">
                    <span>내 용</span>
                  </label>
                  <StyledTextArea
                    id="comment"
                    name="comment"
                    onChange={onBodyHandler}
                    value={Body}
                    placeholder="자유롭게 글을 작성해주세요"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default withRouter(BoardWrite);
