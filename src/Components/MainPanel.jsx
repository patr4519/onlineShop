import React from "react";
import { Basket } from "./Basket";
import searchIMG  from "../img/searchIMG.svg";
 
export const MainPanel = ({setSearchValue, searchValue, basket, openBasket }) => {
    return (
        <div className="mainPanel">
            <div className="products">Products</div>
            <div className="inputForm">
                <img src={searchIMG} alt='searchIMG' className="searchIMG"/>
                <input 
                className="inputSearch" 
                value={searchValue} 
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search"
                />
            </div>
            <Basket 
            openBasket={openBasket}
            basket={basket}/>
        </div>
    );
}