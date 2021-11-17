import * as actionTypes from "../redux/constants/cartConstants";
import axios from "axios";
// //일단 넣음
// const User = require("../../models/User");
// // const User = require("../../../server/models/User");
// const express = require("express");
// const router = express.Router();

// export const addToCart = (id, qty, user) => async (dispatch, getState) => {
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  //post보내는거 어떻게 하지..보냈을때 res 응답으로 받아야함
  // const response = await axios.post(`/api/products/${id}`, { id, qty });
  // console.log(response, "이게 맞나....");

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

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  console.log(localStorage.getItem("cart"));
  // //이게 맞나..

  // // await axios.post({ data });
  // // return data;
  // router.post(`/api/products/${id}`, async (req, res) => {
  //   try {
  //     const user = res.locals.user;
  //     const findPost = await User.findOne({
  //       _id: req.body.products,
  //     }).populate("Product");
  //     await User.updateOne(
  //       { _id: findPost._id },
  //       { $push: { likes: user._id } }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
