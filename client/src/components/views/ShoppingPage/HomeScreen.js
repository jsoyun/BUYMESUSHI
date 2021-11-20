import "./HomeScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// import React from "react";
//Components
import Product from "./ShopComponents/Product";
//Actions
import { getProducts as listProducts } from "../../../actions/productActions";
import { useState } from "react";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const getProducts = useSelector((state) => state.getProducts);
    const user = useSelector((state) => state.user.userData);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    console.log(user);

    if (user) {
        return (
            <div className="homescreen">
                <div className="homescreen-myinfo-container">
                    <div className="homscreen-myinfo">
                        <div className="homescreen-nickname">
                            {user.nickname}님의 현재 포인트 :
                        </div>
                        <div className="homescreen-point">{user.points}</div>
                    </div>
                </div>

                <div className="homescreen_products">
                    {loading ? (
                        <h2>로딩중...</h2>
                    ) : error ? (
                        <h2>{error}</h2>
                    ) : (
                        products.map((product) => (
                            <Product
                                key={product._id}
                                productId={product._id}
                                name={product.name}
                                price={product.price}
                                description={product.description}
                                imageUrl={product.imageUrl}
                            />
                        ))
                    )}
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default HomeScreen;
