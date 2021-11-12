import * as actionTypes from "../redux/constants/productConstants";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  console.log("걍 여기로 안오는듯");
  console.log("여기는 productActions의 getProducts");
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
    const { data } = await axios.get("/api/products");
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.reponse.data.message
          ? error.reponse.data.message
          : error.message,
    });
  }
};
export const getProductDetails = (id) => async (dispatch) => {
  console.log(id);
  console.log("여기는 productActions의 getProductDetails");
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      // type: actionTypes.GET_PRODUCTS_FAIL,
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.reponse.data.message
          ? error.reponse.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCT_DETAILS_RESET,
  });
};
