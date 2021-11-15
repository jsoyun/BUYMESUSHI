import { BoardError } from "../redux/constants/BoardError";

export const errorHandler = (err) => {
  if (BoardError[err]) {
    window.alert(BoardError[err].korMsg);
  }
};
