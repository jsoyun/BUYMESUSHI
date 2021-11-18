import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./BoardWrite.css";
// import { errorHandler } from "../../../services/error-handler";
import Modal from "react-modal";


// 이미지 업로드
if (document.getElementById('img')) {
  document.getElementById('img').addEventListener('imgupload', function (e) {
    const formData = new FormData();
    console.log(this, this.files);
    formData.append('img', this.files[0]);
    axios.post('/write/img', formData)
      .then((res) => {
        document.getElementById('img-url').value = res.data.url;
        document.getElementById('img-preview').src = res.data.url;
        document.getElementById('img-preview').style.display = 'inline';
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

// // 게시글 작성 양식
// const comments = ["Mollis ut", "In aliquam", "Nunc et libero"];
// $(".form .icons label i").on("click", function () {
//   const idx = $(this).parent("label").index();
//   $(this).parent("label").addClass("on").siblings().removeClass("on");
//   $(".form .satisfaction .comment").text(comments[idx]);
// });
// $(".form textarea").on("keyup", function () {
//   const len = $(this).val().length;
//   $(this).siblings("label").find(".length > span").text(len);
// });

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

  const onImgHandler = (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);

    setFileUrl(imageUrl);
    setImg(event.currentTarget.value);
  };
  console.log(Title);

  const onSubmitHandler = (event) => {
    if (Title === "") {
      event.preventDefault();
      return alert("제목이나 내용이 빈 채로 게시할 수 없습니다.");
    } else if (Body === "") {
      event.preventDefault();
      return alert("제목이나 내용이 빈 채로 게시할 수 없습니다.");
    }
    event.preventDefault();
    let form = document.getElementById("comment-form");
    let formData = new FormData(form);
    console.log(formData);

    axios.post("/api/board/write", formData).then((response) => {
      console.log(response.data);
      console.log("글쓰기 성공");
    });
  };
  // useEffect(() => {
  //   axios
  //     .get(
  //       ("/api/boardwrite")
  //     )
  //     .then((response) => {
  //       errorHandler(response.data.data);
  //       // setArticleList(response.data.data);
  //     });
  // }, []);

  return (
    <div>
      <form id="comment-form"
        // action="/board/write" method="POST"
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
                  <label htmlFor="title">제 목 <span className="point">*</span></label>
                  <input id="title" type="text" name="title" onChange={onTitleHandler} value={Title} placeholder="제목은 필수입력 사항입니다." />
                </div>
                <div className="upload_photo">
                  <input id="img-url" type="hidden" style={{ display: "none" }} name="url" />
                  <label id="img-label1" htmlFor="img">사진 업로드</label>
                  <input id="img" type="file" accept="image/*" />
                </div>
                <div className="action">
                  <button className="btn_jc" type="submit" onClick={() => setModalIsOpen(false)}>제 출</button>
                </div>
              </div>
              <div className="half">
                <div className="content">
                  <label htmlFor="comment">
                    <span>내 용</span>
                  </label>
                  <textarea id="comment" name="comment" onChange={onBodyHandler} value={Body} placeholder="자유롭게 글을 작성해주세요"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

  );
};

export default BoardWrite;
