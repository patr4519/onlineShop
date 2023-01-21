import React from "react";
import { Basket } from "./Basket";

export const MainPanel = () => {
    return (
        <div className="mainPanel">
            <h2>Products</h2>
            <input value={'value'}/>
            <Basket />
        </div>
    );
}