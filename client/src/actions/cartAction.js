import * as actionTypes from "../redux/constants/cartConstants";
import axios from "axios";
//추가함

import { useSelector } from "react-redux";

// export const addToCart = (id, qty, user) => async (dispatch, getState) => {
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  const qty1 = qty;

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty,
      // user,

      // user: User.email,
    },
  });

  //기존 data에 수량까지 추가해주기
  const addQty = { ...data, qty1 };

  //post로 서버로 전송. 입력할 데이터 addQty
  // const inserCartData = () => {
  //   axios.post(`/api/products/${id}`, addQty);
  // };
  // inserCartData();

  //mypage라우터로,,post로 서버로 전송. 입력할 데이터 addQty
  const inserCartData = () => {
    axios.put(`/api/mypage`, addQty);
  };
  inserCartData();

  ///

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  console.log(localStorage.getItem("cart"));
  // console.log(data, "넌 뭘까 카트액션에서!!!!!!");
  // //이게 맞나..
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  //삭제!!
  const removeProductCartDB = () => {
    axios.post(`api/mypage`);
  };
  removeProductCartDB();

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
