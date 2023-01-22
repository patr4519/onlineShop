import React from "react";
import basketIMG from "../img/basket.svg";

export const Basket = ({ basket }) => {
    return (
        <div className="basket">
            <img src={basketIMG} alt='basketIMG' className="basketIMG" />
            <span className="countItems">{basket.length}</span>
        </div>
    );
}   