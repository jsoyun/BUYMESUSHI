//cart
import "./MyPage.css";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//

//컴포넌트
import CartItem from "../ShoppingPage/ShopComponents/CartItem";
//액션
import { addToCart, removeFromCart } from "../../../actions/cartAction";
import axios from "axios";

//////////////////
//현석
import MyPageAuth from "./Sections/MyPageAuth";
////////////////

const MyPage = () => {
  //   console.log("로컬 ", localStorage.getItem("cart"));
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  //
  //   console.log(cart, "카트///////////////");
  //   db.user.insert(cart);

  //  const insertCartData= async(e) => {
  //      e.preventDefault();
  //    const res= await axios.get(`/api/product`);
  //    if(res.data[0]===undefined){
  //        let tmp= [];
  //        tmp.push(res.data);
  //        return setList(cover);
  //        setList(res.data);
  //    }
  //  }
  //  User.insertMany(insertCart);
  //

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotasl = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  const myPoint = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <div className="MyPage">
      마이페이지야
      <div className="AuthBoard">
        {/* /////////////////////////////// */}
        {/* 현석 */}
        <MyPageAuth />
        {/* /////////////////////////////// */}
      </div>
      <div className="cartscreen">
        <div className="cartscreen_left">
          <div className="cartscreen_right">
            <div className="cartscreen_info">
              <div>
                남은 포인트:
                {getCartSubTotasl() >= 10000 ? (
                  <div className="point">
                    <h3>포인트가 부족해요!!!!</h3>
                    <ul>
                      <li className="authboardLink">
                        {" "}
                        <a href="/authboard">지키미 포인트 획득</a>
                      </li>

                      <li>
                        {" "}
                        <a href="/"> 게임 포인트 획득</a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <h2>{10000 - myPoint()}</h2>
                )}
              </div>

              <p>subtotal ({getCartCount()}) items</p>
              {/* <p>결제예정금액 ${getCartSubTotasl().toFixed(2)}</p> */}
              <p>결제예정금액 ${getCartSubTotasl()}</p>
            </div>
            <div>
              <button>Proceed To Checkout</button>
            </div>
          </div>
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <div>
              Your cart is empty <Link to="/product">Go back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeHandler}
              />
            ))
          )}
        </div>
        {/* <div className="cartscreen_right">
          <div className="cartscreen_info">
            <p>subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotasl().toFixed(2)}</p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MyPage;
