import React from 'react';
import './BoardEdit.css';

const BoardEdit = () => {
  return (
    <div>
      <form id="comment-form" method="POST">
        <div class="form">
          <div class="wrapper">
            <div class="header">
              <span class="title1">게시글 수정</span>
              <span class="desc">비방/심한 욕설은 제재의 대상이 될 수 있습니다.</span>
            </div>
            <div class="content">
              <div class="half">
                <div class="title">
                  <label for="title">제 목 <span class="point">*</span></label>
                  <input id="title" type="text" name="title" value="{{comment.title}}" />
                </div>
                <div class="upload_photo">
                  <input id="img-url" type="hidden" style={{ display: "none" }} name="url" />
                  <label id="img-label1" for="img">사진 업로드</label>
                  <input id="img" type="file" accept="image/*" />
                </div>
                <div class="action">
                  <button class="btn_jc" type="submit"> 수정</button>
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
};

export default BoardEdit;
