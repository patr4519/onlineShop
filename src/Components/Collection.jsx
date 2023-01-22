import React from "react";

export const Collection = ({ name, photo, price, addToBasket, index }) => {
    return (
        <div className="collection">
            <img src={photo} alt='photo' className="itemPhoto" />
            <div className="bottomItem">
                <div className="itemName">{name}</div>
                <div className="itemPrice">{price}</div>
            </div>
            <button onClick={() => addToBasket(index)} className='button-55'>Into Basket</button>
        </div>
    );
}