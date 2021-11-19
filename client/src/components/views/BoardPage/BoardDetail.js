import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import "./BoardDetail.css";
import axios from "axios";
import Button from '@mui/material/Button';
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";



function BoardDetail() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [lastIdx, setLastIdx] = useState(0);
  const [Data, setData] = useState([]);
  const user = useSelector((state) => state.user.userData);
  const [viewCount, setViewCount] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/board");
        console.log(res.data.Boards);

        const _Data = await res.data.Boards.find(
          (rowData) => (
            {
              _id: rowData._id,
              // index: lastIdx,
              title: rowData.title,
              boardBody: rowData.boardBody,
              viewcount: rowData.viewcount,
              postedBy: rowData.postedBy.nickname,
            }
          )
        );
        setData(Data.concat(_Data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);



  return (
    <div class="board">
      <div class="header">
        <div class="wrapper1">
          <div class="title">UsEarth</div>
          <div class="desc">게시판 상세 페이지</div>
        </div>
      </div>

      <div class="article">
        <div class="wrapper">
          <br />
          <br />
          <br />
          <table style={{ border: "2px solid #3b5998" }}>
            <tbody>


              <tr>
                <th>번호</th>
                {/* <td>{rowData._id}</td> */}
                <th>조회수</th>
                {/* <td>{rowData.viewCount}</td> */}
                <th>작성자</th>
                {/* <td>{{comments.User.nick}}</td> */}
              </tr>
              <tr>
                <th>제목</th>
                {/* <td colspan="5">{{comments.title}}</td> */}
              </tr>
              <tr>
                <th>작성일</th>
                {/* <td colspan="2">{{comments.createdAt}}</td> */}
                <th>수정일</th>
                {/* <td colspan="2">{{comments.updatedAt}}</td> */}
              </tr>
              <tr>
                <th>이미지</th>
                {/* <td colspan="6" height="400" style="max-width: 600px; max-height: 600px;"><img src="{{comments.img}}" /></td> */}
              </tr>
              <tr>
                <th>내 용</th>
                {/* <td colspan="6" height="400" style="text-align: left;" >{{comments.comment}}</td> */}
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
