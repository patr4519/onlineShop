import React from "react";

export const BasketResult = ({ countItems, totalPrice }) => {
    const test = () => {
        let totalCost = 0;
        let items = document.querySelectorAll('.itemCost');
        for (let node of items) {
            totalCost += +node.textContent;
        }
        console.log('Total cost: ' + totalCost);
    }

    return (
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
            <button onClick={test}>click</button>
        </div>
    );
}

