import * as actionTypes from "../redux/constants/productConstants";
import axios from "axios";
import { ContactSupportSharp } from "@material-ui/icons";

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
        const data = await axios.get("/api/products");

        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data.data.products,
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
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`/api/products/${id}`);
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data,
        });
        // console.log(data, "데이터 체크 디테일");
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
