import React from "react";

export const Collection = ({ name, photo, price }) => {
    return (
        <div className="collection">
            <img src={photo} alt='photo' className="itemPhoto" />
            <div className="bottomItem">
                <div className="itemName">{name}</div>
                <div className="itemPrice">{price}</div>
            </div>
        </div>
    );
}