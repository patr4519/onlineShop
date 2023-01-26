import React from "react";
import { BasketItem } from "./BasketItem";
import { BasketResult } from "./BasketResult";
import { ContinueButton } from "./ContinueButton";

export const BasketList = ({ basket, openBasket, deleteItem, clearBasket }) => {
    const [countItems, setCountItems] = React.useState(basket.length);
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [continueButton, setContinueButton] = React.useState(true);
    const [showResult, setShowResult] = React.useState(false);

    const showResultBlock = () => {
        setShowResult(true);
        setContinueButton(false);

        let totalCost = 0;
        let items = document.querySelectorAll('.itemCost');
        for (let node of items) {
            totalCost += +node.textContent;
        }
        setTotalPrice(totalCost);

        let totalItems = 0;
        let itemsCount = document.querySelectorAll('.counter');
        for (let node of itemsCount) {
            totalItems += +node.textContent;
        }
        setCountItems(totalItems);
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
                    return <BasketItem key={index} item={item} deleteItem={deleteItem}/>
                })
            }
            {
                (continueButton && basket.length > 0) && <ContinueButton showResultBlock={showResultBlock}/>
            }
            {
                (showResult && basket.length > 0) && <BasketResult totalPrice={totalPrice} countItems={countItems}/>  
            }
            {
                basket.length > 0 && <button className="button-55 clearB" onClick={clearBasket}>Clear basket</button>
            }
        </div>
    );
}