import React from "react";
import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//Actions
// import { getProductDetails } from "../../../actions/productActions";
import { getProductDetails } from "../../../actions/productActions";
import { addToCart } from "../../../actions/cartAction";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  //product로 하면 오류나 왤까
  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, p } = productDetails;

  useEffect(() => {
    console.log("product로 하면 오류나 왤까 이 다음으로 안넘어옴");
    if (p && match.params.id !== p._id) {
      console.log("product로 했을 때 dispatch");
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, p]);

  // const productDetails = useSelector((state) => state.getProductDetails);
  // const { loading, error, products } = productDetails;

  // useEffect(() => {
  //   if (products && match.params.id !== products._id) {
  //     dispatch(getProductDetails(match.params.id));
  //   }
  // }, [dispatch, match, products]);

  return (
    <div className="productscreen">
      <div className="productscreen_left">
        <div className="left_image">
          <img
            src="https://cdn.pixabay.com/photo/2013/10/03/23/19/bike-190483__340.jpg"
            alt="product_name"
          ></img>
        </div>
      </div>
      <div className="left_info">
        <p className="left_name">product1</p>
        <p>price:$499</p>
        <p>description: 블라블라블라</p>
      </div>
      <div className="productscreen_right">
        <div></div>
      </div>
      <div className="right_info">
        <p>
          price:<span>$499.99</span>
        </p>
        <p>
          Status:<span>In stock</span>
        </p>
        <p>
          Qty
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </p>
        <p>
          <button type="button">Add to cart</button>
        </p>
      </div>
    </div>
  );
};

export default ProductScreen;
