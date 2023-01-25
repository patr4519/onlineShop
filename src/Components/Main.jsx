import React from "react";
import { MainPanel } from "./MainPanel";
import { Collection } from "./Collection";
import { BasketList } from "./BasketList";

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
    const [basket, setBasket] = React.useState([]);
    const [basketList, setBasketList] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        setIsLoading(true);

        const category = categoryId ? `category=${categoryId}` : '';

        fetch(`https://63a4a0c9821953d4f2b9c0b5.mockapi.io/photo_collections?page=${page}&limit=9&${category}`)
            .then((res) => res.json())
            .then((json) => {
                setCollections(json);
            })
            .catch((err) => {
                console.warn(err);
                alert('Error on fetching data');
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [categoryId, page])

    const addToBasket = (index) => {
        setBasket((prev) => [...prev, collections[index]]);
    }

    const deleteItem = (item) => {
        let updatedBasket = basket.filter(element => element.name !== item.name)
        setBasket(updatedBasket);
    }

    const openBasket = () => {
        setBasketList(!basketList)
    }

    const changeCategory = (index) => {
        setCategoryId(index);
        setPage(1);
    }

    return (
        <main>
            <MainPanel
                openBasket={openBasket}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                basket={basket} />

            <h1 className="ourProducts">Our products</h1>
            <ul className="tags">
                {
                    cats.map((item, index) => (
                        <li
                            key={item.name}
                            onClick={() => changeCategory(index)}
                            className={categoryId === index ? 'active' : ''}>{item.name}</li>
                    ))
                }
            </ul>
            <div className={`content ${basketList ? 'hidden' : 'visible'}`}>
                {
                    isLoading ? <h2 className="loading">Loading...</h2> : (collections
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
                        )))
                }
            </div>
            {
                basketList && <BasketList basket={basket} openBasket={openBasket} deleteItem={deleteItem} />
            }
            <ul className="pagination">
                {
                    [...Array(2)].map((_, i) => <li key={i} onClick={() => setPage(i + 1)} className={page === i + 1 ? 'active' : 0}>{i + 1}</li>)
                }
            </ul>
        </main>
    );
}