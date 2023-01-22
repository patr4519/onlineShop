import React from "react";
import { BasketItem } from "./BasketItem";

export const BasketList = ({ basket }) => {
    return (
        <div className="basketList">
            <h2 className="yourBasket">You Basket</h2>
            {
                basket.map((item, index) => {
                    return <BasketItem key={index} item={item}/>
                })
            }
        </div>
    );
}