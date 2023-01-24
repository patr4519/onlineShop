import React from "react";
import { BasketItem } from "./BasketItem";
import { BasketResult } from "./BasketResult";

export const BasketList = ({ basket, openBasket }) => {
    const [countItems, setCountItems] = React.useState(basket.length);
    const [totalPrice, setTotalPrice] = React.useState(0);

    const calceTotalPrice = (price) => {
        
    }

    return (
        <div className="basketList">
            <div className="outer" onClick={openBasket}>
                <div className="inner">
                    <label>Close</label>
                </div>
            </div>
            <h2 className="yourBasket">Your Basket</h2>
            {
                basket.length === 0 ? <h1 className="centered">Empty</h1> : ''
            }
            {
                basket.map((item, index) => {
                    return <BasketItem key={index} item={item} calceTotalPrice={calceTotalPrice}/>
                })
            }
            <BasketResult 
            countItems={countItems} 
            totalPrice={totalPrice} />
        </div>
    );
}