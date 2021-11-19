import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import "./Board.css";
import axios from "axios";
import Button from '@mui/material/Button';
import Modal from "react-modal";
import BoardDetail from './BoardDetail';
import BoardWrite from './BoardWrite';
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

// styled component 1
const customStyles = {
  content: {
    width: "60vw",
    height: "70vh",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    position: "fixed",
    backgroundColor: "rgba(230, 239, 252, 0.75)",
  },
};
// styled component 2
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-grow: row;
  flex-wrap: nowrap;
  float: left;
`;
// styled component 3
const BoardButton = styled(Button)({
  backgroundColor: "#3b5998",
  left: '79.3vw',
});
// // styled component 4
// const SpecialA = styled.a`
//   width: 100%;
//   text-align: "left"
// `;

// Board 시작
function Board() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [lastIdx, setLastIdx] = useState(0);
  const [Data, setData] = useState([]);
  const user = useSelector((state) => state.user.userData);
  const [viewCount, setViewCount] = useState('');
  // const [boardId, setboardId] = useState('');
  // const boardIdHandler = (e) => {
  //   setboardId(e.data._id);
  // };
  // const [boards, setBoards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/board");
        console.log(res.data.Boards);

        const _Data = await res.data.Boards.map(
          (rowData) => (
            setLastIdx(lastIdx + 1),
            {
              _id: rowData._id,
              index: lastIdx,
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
    <div className="board">
      <div className="header">
        <div className="wrapper">
          <div className="title">UsEarth</div>
          <div className="desc">환경지키미들의 자유로운 글을 적어주세요</div>
        </div>
      </div>
      <div className="article">
        <div className="wrapper">
          <table>
            {/* <thead><h1>자유게시판</h1></thead> */}
            {/* <form action="/board" method="POST"> */}
            <tbody>
              <tr>
                <th className="num">게시글 번호</th>
                <th>제 목</th>
                <th>작성자</th>
                <th className="views">조회수</th>
              </tr>




              {/* 이 아래에 map 함수로 보여주기 */}
              {Data.filter((data) => data.boardBody !== "")
                // .filter((data) => data.postedBy !== user.nickname)
                .map((rowData, index) => (
                  <tr key="">
                    <td className="board-list-num">
                      <div>
                        {rowData.index}
                      </div>
                    </td>
                    {/* 해당 타이틀을 가진 글의 세부내용을 볼 수 있는 모달 띄우기, 그리고 띄울 때 조회수 1 플러스 */}
                    <td className="board-list-content">
                      <div>
                        <a onClick={() => setModalIsOpen(true)} id="{{comment.id}}" href>
                          {rowData.title}
                        </a>
                        <Modal
                          style={customStyles}
                          isOpen={modalIsOpen}
                          onRequestClose={() => setModalIsOpen(false)}
                        >
                          <CloseIcon
                            onClick={() => setModalIsOpen(false)}
                            color="action"
                            fontSize="large"
                            cursor="pointer"
                          ></CloseIcon>
                          <Container>
                            <BoardDetail />
                          </Container>
                        </Modal>
                        {/* <a className="board-list-content-link"
                        // id="{{rowData.id}}"
                        // href="/BoardDetail/{{rowData._id}}"
                        >
                          {rowData.title}
                        </a> */}
                      </div>
                    </td>
                    {/* user모델과 연동해서 작성한 사람 nick이 뜰 수 있게 */}
                    <td className="board-list-name">
                      <div>
                        {rowData.postedBy}
                      </div>
                    </td>
                    {/* 조회수 count 필요 */}
                    <td className="viewcount">
                      <div className="board-list-viewcount">{rowData.viewcount}</div>
                    </td>
                  </tr>
                ))}





              <tr>
                <td className="num">0</td>
                <td className="title">
                  <p>건전한 대화 부탁드립니다.</p>
                </td>
                <td>관리자 일동</td>
                <td className="views">33,612</td>
              </tr>
              {/* </form> */}
            </tbody>

          </table>


          <br />
          {/* boardwrite 모달을 띄워주는 버튼 */}
          <div>
            <BoardButton variant="contained" size="large" onClick={() => setModalIsOpen(true)}>글쓰기</BoardButton>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
              <div>
                <BoardWrite />
                {/* <BoardDetail /> */}
              </div>
              <button onClick={() => setModalIsOpen(false)}>창 닫기</button>
            </Modal>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Board;