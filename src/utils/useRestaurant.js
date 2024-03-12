 import { useState,useEffect } from "react";
 import { FETCH_LINK } from "../components/Constant";
 export const useRestaurant=(id)=>{
  // console.log(id);
    const [restaurant, setRestaurant] = useState("");
    useEffect(() => {
      getRestaurantDetails();
    }, []);
    async function getRestaurantDetails() {
      const dat = await fetch(FETCH_LINK+id)
      const json = await dat.json();
      setRestaurant(json.data?.cards[0]?.card?.card?.info);
    }
    return restaurant;
};
