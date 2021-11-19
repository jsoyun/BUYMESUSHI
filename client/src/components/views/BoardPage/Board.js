// import React, { useEffect, useState } from "react";
// import "./Board.css";
// import axios from "axios";
// import { withRouter, Router, Route, Switch } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { errorHandler } from "../../../services/error-handler";
// import Button from '@mui/material/Button';
// import Modal from "react-modal";
// import BoardDetail from './BoardDetail';
// import BoardWrite from './BoardWrite';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));


// function Board() {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [Data, setData] = useState([
//     {
//       boardBody:
//         "자유롭게 적어주세요",
//       title: "제목은 짧게 해주세요",
//     },
//   ]);

//   useEffect(() => {
//     try {
//       const res = axios.get("/api/board");
//       console.log(res.data.Boards);

//       const _Data = res.data.Boards.map(
//         (rowData) => (
//           {
//             title: rowData.title,
//             boardBody: rowData.boardBody,
//             _id: rowData.user
//           }
//         )
//       );
//       setData(Data.concat(_Data));
//     } catch (error) {
//       console.error(error);
//     }
//   }, []);
//   return (


//     <>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>제 목 </StyledTableCell>
//               <StyledTableCell align="right">내 용</StyledTableCell>

//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {Data.map((data) => (
//               <StyledTableRow key={data._id}>
//                 <StyledTableCell component="th" scope="row">
//                   {data.title}
//                 </StyledTableCell>
//                 <StyledTableCell align="right">{data.boardBody}</StyledTableCell>

//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </>
//   );
// }

// export default Board;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import "./Board.css";
import axios from "axios";
import { withRouter, Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { errorHandler } from "../../../services/error-handler";
import Button from '@mui/material/Button';
import Modal from "react-modal";
import BoardDetail from './BoardDetail';
import BoardWrite from './BoardWrite';
// import BoardWrite from './BoardWrite';



function Board() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [boardId, setboardId] = useState('');
  const boardIdHandler = (e) => {
    setboardId(e.data._id);
  };
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let res = await axios.get('api/board');
      console.log(res.data.Boards);
      let boardData = res.data.Boards;

      // .then(res => setBoards(res.data))
      // .catch(err => console.log(err));
    }
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
              {/* {% for comment in comments %} */}
              <tr>
                <td className="board-list-num">
                  <div>
                    {/* {{ boardData.title }} */}

                  </div>
                </td>
                {/* 해당 타이틀을 가진 글의 세부내용으로 가기 */}
                <td className="board-list-content">
                  <div>
                    {/* <a className="board-list-content-link" id="{{comment.id}}" href="/boarddetail/{{comment.id}}">{{ comment.title }}</a> */}
                  </div>
                </td>
                {/* user모델과 연동해서 작성한 사람 nick이 뜰 수 있게 */}
                <td className="board-list-name">
                  <div>
                    {/* {{comment.User.nick}} */}
                  </div>
                </td>
                {/* 조회수로 수정 요망 */}
                <td className="viewcount">
                  {/* <div className="board-list-viewcount">{{ comment.viewcount }}</div> */}
                </td>
              </tr>

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
            <Button variant="contained" size="large" onClick={() => setModalIsOpen(true)}>글쓰기</Button>
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
    </div>
  );
}

export default Board;