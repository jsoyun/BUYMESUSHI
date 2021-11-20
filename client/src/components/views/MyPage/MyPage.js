//cart
import "./MyPage.css";
import React from "react";
import { useState, useEffect } from "react";
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

    const [Data, setData] = useState([{}]);
    const [PostStates, setPostStates] = useState({});
    const [lastIdx, setLastIdx] = useState(0);
    const [userData1, setUserData1] = useState({
        nickname: "",
        userImage: "",
        points: 0,
    });
    //const [userData2, setUserData2] = useState({ points: 0 });

    useEffect(() => {
        const fetchData = async (e) => {
            try {
                const res = await axios.get("/api/mypage");

                const _Data = await res.data.userPosts.map(
                    (rowData) => (
                        setLastIdx(lastIdx + 1),
                        {
                            nickname: rowData.postedBy.nickname,
                            photo: rowData.photo,
                            compliteAuth: rowData.compliteAuth,
                            wrongAuth: rowData.wrongAuth,
                            comments: rowData.comments,
                        }
                    )
                );

                setUserData1({
                    nickname: res.data.user.nickname,
                    userImage: res.data.user.profileImage,
                    points: res.data.user.points,
                });
                setPostStates(res.data.postsState);
                return setData(Data.concat(_Data));
            } catch (error) {}
        };
        fetchData();
    }, []);
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
        return cartItems.reduce(
            (price, item) => item.price * item.qty + price,
            0
        );
    };

    const myPoint = () => {
        return cartItems.reduce(
            (price, item) => item.price * item.qty + price,
            0
        );
    };

    const paymentBtn = (price) => {
        axios
            .put("/api/mypage/payment", { payPrice: price })
            // .then((res) => res.json())
            .then(alert("성공성공~"))
            .catch((err) => {
                console.log(err);
            });
        localStorage.removeItem("cart");
    };

    // const useConfirm = (message = null, onConfirm, onCancel) => {
    //     if (!onConfirm || typeof onConfirm !== "function") {
    //         return;
    //     }
    //     if (onCancel && typeof onCancel !== "function") {
    //         return;
    //     }

    //     const confirmAction = () => {
    //         if (window.confirm(message)) {
    //             onConfirm();
    //         } else {
    //             onCancel();
    //         }
    //     };

    //     return confirmAction;
    // };
    // const deleteConfirm = () => console.log("삭제했습니다.");
    // const cancelConfirm = () => console.log("취소했습니다.");
    // const confirmDelete = useConfirm(
    //     "삭제하시겠습니까?",
    //     deleteConfirm,
    //     cancelConfirm
    // );

    // const onRemove = () => {
    //     if (window.confirm("정말 결제하시겠습니까?")) {
    //         alert("결제 완료하였습니다.");
    //     } else {
    //         alert("취소합니다.");
    //     }
    // };

    return (
        <div className="MyPage">
            <div className="AuthBoard">
                {/* /////////////////////////////// */}
                {/* 현석 */}
                <MyPageAuth
                    photoData={Data}
                    postState={PostStates}
                    userData={userData1}
                />
                {/* /////////////////////////////// */}
            </div>
            <div className="cartscreen">
                <div className="cartscreen_left">
                    <div className="cartscreen_right">
                        <div className="cartscreen_info">
                            <div>
                                <div>
                                    <div
                                        className="MyPage-cartscreen-subtitle"
                                        style={{ borderBottomWidth: "0px" }}
                                    >
                                        현재 포인트{" "}
                                    </div>{" "}
                                    : <h2> {userData1.points}</h2>
                                </div>
                                <div>
                                    <div
                                        className="MyPage-cartscreen-subtitle"
                                        style={{ borderBottomWidth: "0px" }}
                                    >
                                        결제 예정 금액{" "}
                                    </div>{" "}
                                    : <h2>{getCartSubTotasl()}</h2>
                                </div>
                                <div>
                                    <div
                                        className="MyPage-cartscreen-subtitle"
                                        style={{ borderBottomWidth: "0px" }}
                                    >
                                        남은 포인트{" "}
                                    </div>{" "}
                                    :{" "}
                                    {getCartSubTotasl() > userData1.points ? (
                                        <h2>포인트 부족</h2>
                                    ) : (
                                        <h2>{userData1.points - myPoint()}</h2>
                                    )}
                                </div>
                            </div>

                            <p>
                                subtotal (
                                <span className="MyPage-cartItemQty">
                                    {getCartCount()}
                                </span>
                                ) items
                            </p>
                            {/* <p>결제예정금액 ${getCartSubTotasl().toFixed(2)}</p> */}
                        </div>
                        <div>
                            {getCartSubTotasl() > userData1.points ? (
                                <h2></h2>
                            ) : (
                                <button
                                    onClick={() => {
                                        paymentBtn(myPoint());
                                    }}
                                >
                                    Proceed To Checkout
                                </button>
                            )}
                            {/* <button
                                onClick={() => {
                                    paymentBtn(myPoint());
                                }}
                            >
                                Proceed To Checkout
                            </button> */}
                        </div>
                    </div>
                    <h2>Shopping Cart</h2>
                    {cartItems.length === 0 ? (
                        <div>
                            Your cart is empty{" "}
                            <Link to="/product">Go back</Link>
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
            </div>
        </div>
    );
};

export default MyPage;
