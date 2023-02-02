import React from "react";

export const BasketResult = ({ totalPrice, countItems }) => {
    return (
        <div className="overlayBasketResult">
            <div className="basketResult">
                <div className="top">
                    <div>Total Price:</div>
                    <div>{totalPrice}$</div>
                </div>
                <div className="top">
                    <div>Amount of Goods:</div>
                    <div>{countItems}</div>
                </div>
                <button className="button-55 checkout" onClick={() => alert('All done!')}>Proceed to Checkout</button>
            </div>
        </div>
    );
}

