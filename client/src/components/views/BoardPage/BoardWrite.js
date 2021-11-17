import React from 'react';
import axios from 'axios';
import "./BoardWrite.css";


// 이미지 업로드
if (document.getElementById('img')) {
  document.getElementById('img').addEventListener('change', function (e) {
    const formData = new FormData();
    console.log(this, this.files);
    formData.append('img', this.files[0]);
    axios.post('/post/img', formData)
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
  return (
    <div>
      <form id="comment-form" action="/boardwrite" method="POST">
        <div class="form">
          <div class="wrapper">
            <div class="header">
              <span class="title1">게시글 작성</span>
              <span class="desc">비방/심한 욕설은 제재의 대상이 될 수 있습니다.</span>
            </div>
            <div class="content">
              <div class="half">
                <div class="title">
                  <label for="title">제 목 <span class="point">*</span></label>
                  <input id="title" type="text" name="title" placeholder="제목은 필수입력 사항입니다." />
                </div>
                <div class="upload_photo">
                  <input id="img-url" type="hidden" style={{ display: "none" }} name="url" />
                  <label id="img-label1" for="img">사진 업로드</label>
                  <input id="img" type="file" accept="image/*" />
                </div>
                <div class="action">
                  <button class="btn_jc" type="submit"> 제출</button>
                </div>
              </div>
              <div class="half">
                <div class="content">
                  <label for="comment">
                    <span>내 용</span>
                  </label>
                  <textarea id="comment" name="comment" placeholder="자유롭게 글을 작성해주세요"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

  );
}

export default BoardWrite;
