import React from "react";
import "./BoardDetail.css";


// props로 상위 컴포넌트의 게시글 값 받아오기
function BoardDetail(props) {
  console.log(props.clickData.detailTitle, '클릭데이터');

  return (

    <div className="board">
      <div className="header">
        <div className="wrapper1">
          <div className="title">UsEarth</div>
          <div className="desc">게시판 상세 페이지</div>
        </div>
      </div>

      <div className="article">
        <div className="wrapper">
          <br />
          <br />
          <br />
          <table style={{ border: "2px solid #3b5998" }}>
            <tbody>


              <tr>
                <th>작성자</th>
                <td>{props.clickData.detailPostedBy}</td>
                <th>글번호</th>
                <td>{props.clickData.detailIndex + 1}</td>
              </tr>
              <tr>
                <th>제목</th>
                <td colSpan="5">{props.clickData.detailTitle}</td>
              </tr>
              <tr>
                <th>작성일</th>
                {props.clickData.detailCreatedAt}
              </tr>
              <tr>
                <th>내 용</th>
                <td colSpan="6" height="400" style={{ textAlign: "left" }} >
                  {props.clickData.detailBody}
                </td>
              </tr>

            </tbody>
          </table>
          <br />
          <br />

        </div>
      </div>

    </div>
  );
}

export default BoardDetail;
