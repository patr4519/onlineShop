import React from "react";
import { MainPanel } from "./MainPanel";

const cats = [
    { "name": "All" },
    { "name": "Phones" },
    { "name": "Tabs" },
    { "name": "Headphones" }
  ];

export const Main = () => {
    return (
        <main>
            <MainPanel />
        </main>
    );
}