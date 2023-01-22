import React from "react";
import { BasketItem } from "./BasketItem";

export const BasketList = ({ basket, openBasket }) => {
    return (
        <div className="basketList">
            <h2 className="yourBasket">Your Basket</h2>
            {
                basket.map((item, index) => {
                    return <BasketItem key={index} item={item} openBasket={openBasket}/>
                })
            }
        </div>
    );
}