import React from "react";

export const BasketItem = ({ item, deleteItem, basket }) => {
    const [counter, setCounter] = React.useState(1);

    const getTotalPrice = () => {
        let totalPrice = 0;
        totalPrice = parseFloat(item.price) * counter;
        if (totalPrice < 0) return 0;
        return totalPrice;
    }

    const counterMinus = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className="basketItem">
            <div className="product">
                <p className="basketTitles">PRODUCTS</p>
                <img className="itemIcon" src={item.photos} alr='photo'></img>
            </div>
            <div className="itemName">
                <p className="basketTitles">NAME</p>
                <div className="centered">{item.name}</div>
            </div>
            <div className="itemPrice">
                <p className="basketTitles">PRICE</p>
                <div className="centered">{item.price}</div>
            </div>
            <div className="counters">
                <p className="basketTitles">COUNTERS</p>
                <div className="centered">
                    <div className="counterWrapper">
                        <div className="plusMinus" onClick={counterMinus}>-</div>
                        <div className="counter">{counter}</div>
                        <div className="plusMinus" onClick={() => setCounter(counter + 1)}>+</div>
                    </div>
                </div>
            </div>
            <div className="total">
                <p className="basketTitles">TOTAL</p>
                <div className="centered">Item total: <span className="itemCost">{getTotalPrice()}</span>$</div>
            </div>
            <button className="button-24" onClick={() => deleteItem(item)}>Remove</button>
        </div>
    );
}