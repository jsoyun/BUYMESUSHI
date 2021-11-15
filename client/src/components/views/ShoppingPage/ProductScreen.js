import React from "react";
import "./ProductScreen.css";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

//Actions
// import { getProductDetails } from "../../../actions/productActions";
import { getProductDetails } from "../../../actions/productActions";
import { addToCart } from "../../../actions/cartAction";
// import { useParams } from "react-router";

const ProductScreen = ({ match, history }) => {
  // const params = useParams();

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  //product로 하면 오류나 왤까
  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  // useEffect(() => {
  //   //이부분이 뭔지 알고 문제 찾기
  //   if (product && params.id !== product._id) {
  //     console.log(product.id);

  //     dispatch(getProductDetails(params.id), "ooooooooo");
  //   }
  // }, [dispatch, product]);

  // const productDetails = useSelector((state) => state.getProductDetails);
  // const { loading, error, products } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/MyPage`);
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen_left">
            <div className="left_image">
              <img src={product.imageUrl} alt={product.name}></img>
            </div>
          </div>
          <div className="left_info">
            <p className="left_name">{product.name}</p>
            <p>price:${product.price}</p>
            <p>description: {product.description}</p>
          </div>
          <div className="productscreen_right">
            <div></div>
          </div>
          <div className="right_info">
            <p>
              price:<span>${product.price}</span>
            </p>
            <p>
              Status:
              <span>
                {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </p>
            <p>
              Qty
              <select value={qty} onChange={(e) => setQty(e.target.value)}>
                {/* <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option> */}
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </p>
            <p>
              <button type="button" onClick={addToCartHandler}>
                Add to cart
              </button>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default withRouter(ProductScreen);
