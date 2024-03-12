import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Schimmer from "./Schimmer";
import { Link } from "react-router-dom";
function filterData(searchList, item) {
  return searchList.filter((e) => e?.info?.name.toLowerCase()?.includes(item.toLowerCase()));
}
const Body = () => {
  const [item, setItem] = useState("");
  const [cards, setCards] = useState();
  const [searchList, setSearchList] = useState();
  useEffect(() => {
    getList();
  }, []);
  async function getList() {
    const data = await fetch(
       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4968921&lng=80.3004177"
    );
    const json = await data.json();
    // {console.log(json)}   
    setCards(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(cards);
    setSearchList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  return !cards? ( <Schimmer />) : (
    <>
      {/* { console.log("loaded")} */}
      <div>
        <input
          type="text"
          placeholder="Enter the name..."
          value={item}
          className="w-1/2 p-3 my-8 ml-20 mr-5 border-2 border-solid border-y-slate-900 rounded-xl text-xl"
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button
          className="rounded-xl border-2 border-solid border-slate-600 p-3 text-white text-xl items-center bg-green-300 font-serif"
          onClick={() => {
            setCards(filterData(searchList, item));
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap mx-auto justify-around ">
        {cards.map((restaurant ) => {
         return (
  <Link style={{ textDecoration: "none" }} to={"/restaurant/" + restaurant?.info?.id}>
    <RestaurantCard  key={restaurant?.info?.id} {...restaurant.info} />
  </Link>
);
        })}
      </div>
    </>
  );
};

export default Body;
