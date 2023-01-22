import React from "react";
import { MainPanel } from "./MainPanel";
import { Collection } from "./Collection";

const cats = [
    { "name": "All" },
    { "name": "Phones" },
    { "name": "Tabs" },
    { "name": "Headphones" }
];

export const Main = () => {
    const [categoryId, setCategoryId] = React.useState(0);
    const [searchValue, setSearchValue] = React.useState('');
    const [collections, setCollections] = React.useState([]);
    const [countItems, setCountItems] = React.useState(0);
    const [basket, setBasket] = React.useState([]);

    React.useEffect(() => {
        console.log('fetching data from mock api');

        fetch(`https://63a4a0c9821953d4f2b9c0b5.mockapi.io/photo_collections?${categoryId ? `category=${categoryId}` : ''}`)
            .then((res) => res.json())
            .then((json) => {
                setCollections(json);
            })
            .catch((err) => {
                console.warn(err);
                alert('Error on fetching data');
            })
    }, [categoryId])

    const addToBasket = (index) => {
        setCountItems(countItems + 1);
        setBasket((prev) => [...prev, collections[index]]);
    }

    return (
        <main>
            <MainPanel 
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
            countItems={countItems} />

            <h1 className="ourProducts">Our products</h1>
            <ul className="tags">
                {
                    cats.map((item, index) => (
                        <li
                            key={item.name}
                            onClick={() => setCategoryId(index)}
                            className={categoryId === index ? 'active' : ''}>{item.name}</li>
                    ))
                }
            </ul>
            <div className="content">
                {
                    collections
                        .filter((item) => {
                            return item.name.toLowerCase().includes(searchValue.toLowerCase())
                        })
                        .map((item, index) => (
                            <Collection
                                index={index}
                                key={index}
                                name={item.name}
                                photo={item.photos}
                                price={item.price}
                                addToBasket={addToBasket}
                            />
                        ))
                }
            </div>
        </main>
    );
}