import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import "./BoardDetail.css";
import axios from "axios";
import Button from '@mui/material/Button';
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";


// props로 상위 컴포넌트의 게시글 값 받아오기
function BoardDetail(props) {
  // const [lastIdx, setLastIdx] = useState(0);
  // const [Title, setTitle] = useState("");
  // const [Body, setBody] = useState("");
  // const [Data, setData] = useState([
  //   {
  //     _id: "",
  //     index: "",
  //     title: "",
  //     boardBody: "",
  //     viewcount: "",
  //     postedBy: "",
  //   },
  // ]);
  // const user = useSelector((state) => state.user.userData);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get("/api/board");
  //       console.log(res.data.Boards);

  //       const _Data = await res.data.Boards.find(
  //         (rowData) => (
  //           setLastIdx(lastIdx + 1),
  //           {
  //             _id: rowData._id,
  //             index: lastIdx,
  //             title: rowData.title,
  //             boardBody: rowData.boardBody,
  //             viewcount: rowData.viewcount,
  //             postedBy: rowData.postedBy.nickname,
  //           }
  //         )
  //       );
  //       setData(Data.concat(_Data));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // const [BoardDetail, setBoardDetail] = useState([
  //   {
  //     _id: "",
  //     index: "",
  //     title: "",
  //     boardBody: "",
  //     viewcount: "",
  //     postedBy: "",
  //   }
  // ]);

  // useEffect(() => {
  //   axios.get(`/api/board`).then((res) => {
  //     console.log("해당 게시글 불러오기 성공");
  //     setBoardDetail(res.data);
  //   });
  // }, []);

  // axios.get("/api/board/:_id", { Body, Title }).then((res) => {
  //   console.log(res.data);
  //   console.log("해당 게시글 불러오기 성공");
  // });
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////


  console.log(props.boardsData[1].title, '보드데이터');
  console.log(props.clickData, '클릭데이터');
  // 결국 props.boardsData[props.clickData].title  이 값을 찾으면 됨

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
                <th>번호</th>
                <td>{props.boardsData[props.clickData].title}</td>
                <th>조회수</th>
                <td>{props.boardsData[props.clickData].viewCount}</td>
                <th>작성자</th>
                <td>{props.boardsData[props.clickData].postedBy}</td>
              </tr>
              <tr>
                <th>제목</th>
                <td colSpan="5">{props.boardsData[props.clickData].title}</td>
              </tr>
              <tr>
                <th>작성일</th>
                <td colSpan="2">{props.boardsData[props.clickData].createdAt}</td>
                <th>수정일</th>
                <td colSpan="2">{props.boardsData[props.clickData].updatedAt}</td>
              </tr>
              <tr>
                <th>이미지</th>
                <td colSpan="6" height="400" style={{ maxWidth: "600px", maxHeight: "600px" }}>
                  <img src="{props.boardsData[props.clickData].img}" />
                </td>
              </tr>
              <tr>
                <th>내 용</th>
                <td colSpan="6" height="400" style={{ textAlign: "left" }} >{props.boardsData[props.clickData].boardBody}</td>
              </tr>

            </tbody>
          </table>
          <br />
          <br />

        </div>
      </div>
      {/* <div >
            {% if comments.UserId === user.id%}
            <a href="/board\{{comments.id}}/boardedit" style="margin-left: 200px; font-weight: bold;">수정</a>     
            <a href="/board\{{comments.id}}/delete" style="margin-left: 50px; font-weight: bold;">삭제</a> 
            {% endif %}
        </div> */}

    </div>
  );
}

export default BoardDetail;
