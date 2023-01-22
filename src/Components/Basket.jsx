import React from "react";
import basket from "../img/basket.svg";

export const Basket = ({countItems}) => {
    return (
        <div className="basket">
            <img src={basket} alt='basket' className="basketIMG"/>
            <span className="countItems">{countItems}</span>
        </div>
    );
}   