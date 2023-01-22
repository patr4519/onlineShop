import React from "react";
import { BasketItem } from "./BasketItem";

export const BasketList = ({ basket, openBasket }) => {
    return (
        <div className="basketList">
            <h2 className="yourBasket">Your Basket</h2>
            {
                basket.length === 0 ? <h1 className="centered">Empty</h1> : ''
            }
            {
                basket.map((item, index) => {
                    return <BasketItem key={index} item={item} openBasket={openBasket}/>
                })
            }
            <div className="outer" onClick={openBasket}>
                <div className="inner">
                    <label>Close</label>
                </div>
            </div>
        </div>
    );
}