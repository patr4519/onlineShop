import React from "react";
import { Basket } from "./Basket";

export const MainPanel = ({setSearchValue, searchValue}) => {
    return (
        <div className="mainPanel">
            <div className="inputForm">
                <h2>Products</h2>
                <input 
                className="inputSearch" 
                value={searchValue} 
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search"
                />
            </div>
            <Basket />
        </div>
    );
}