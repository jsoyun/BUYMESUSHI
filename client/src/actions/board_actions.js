import axios from 'axios';
const { POST_AUTHBOARD } = require('./types');

export function postAuthBoard(dataTosubmit) {
  const request = axios
    .post('/api/authboard/post', dataTosubmit)
    .then((response) => response.data);
  return {
    type: POST_AUTHBOARD,
    payload: request,
  };
}
