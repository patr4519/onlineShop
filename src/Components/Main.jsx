import React from "react";
import { MainPanel } from "./MainPanel";

const cats = [
    { "name": "All" },
    { "name": "Phones" },
    { "name": "Tabs" },
    { "name": "Headphones" }
  ];

export const Main = () => {
    const [searchValue, setSearchValue] = React.useState('');

    return (
        <main>
            <MainPanel searchValue={searchValue} setSearchValue={setSearchValue}/>
            <h1 className="title">Our products</h1>
        </main>
    );
}