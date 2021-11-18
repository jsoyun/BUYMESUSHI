import axios from 'axios';
const { POST_BOARD } = require('./types');

export function postAuthBoard(dataTosubmit) {
  const request = axios
    .post('/api/board/post', dataTosubmit)
    .then((response) => response.data);
  return {
    type: POST_BOARD,
    payload: request,
  };
}
