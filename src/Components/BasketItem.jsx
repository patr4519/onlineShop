import React from "react";
import closeIMG from "../img/closeIMG.svg";

export const BasketItem = ({ item, openBasket }) => {
    return (
        <div className="basketItem">
            <div className="product">
                <p className="basketTitles">PRODUCTS</p>
                <img className="itemIcon" src={item.photos} alr='photo'></img>
            </div>
            <div className="itemName">
                <p className="basketTitles">NAME</p>
                <div>{item.name}</div>
            </div>
            <div className="itemPrice">
                <p className="basketTitles">PRICE</p>
                <div>{item.price}</div>
            </div>
            <div className="counters">
                <p className="basketTitles">COUNTERS</p>
                <div>counters</div>
            </div>
            <div className="total">
                <p className="basketTitles">TOTAL</p>
                <div>Item total: {item.price}</div>
            </div>
            <div className="closeWrapper" onClick={openBasket}>
                <img className="closeIMG" src={closeIMG} alt='close' />
            </div>
        </div>
    );
}