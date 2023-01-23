import React from "react";

export const BasketResult = () => {
    return (
        <div className="basketResult">
            <div className="top">
                <div>Total Price:</div>
                <div>100$</div>
            </div>
            <div className="top">
                <div>Amount of Goods:</div>
                <div>2</div>
            </div>
            <button className="button-55 checkout" onClick={() => alert('All done!')}>Proceed to Checkout</button>
        </div>
    );
}

