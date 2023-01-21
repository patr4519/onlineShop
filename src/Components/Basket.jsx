import React from "react";
import basket from "../img/basket.svg";

export const Basket = () => {
    return (
        <div className="basket">
            <img src={basket} alt='basket' className="basketIMG"/>
        </div>
    );
}   