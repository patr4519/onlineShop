import React from "react";

export const BasketItem = ({item}) => {
    return (
        <div className="basketItem">
            <div className="products">
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
        </div>
    );
}