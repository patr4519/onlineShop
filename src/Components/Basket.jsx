import React from "react";
import basketIMG from "../img/basket.svg";

export const Basket = ({ basket, openBasket }) => {
    return (
        <div onClick={openBasket} className="basket">
            <img src={basketIMG} alt='basketIMG' className="basketIMG" />
            <span className="countItems">{basket.length}</span>
        </div>
    );
}   