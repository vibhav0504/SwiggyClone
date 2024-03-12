import { useState,useEffect } from "react";
 import { FETCH_LINK } from "../components/Constant";
 export const useRestaurantMenu=(id)=>{
    const findMenu=(menu)=>{
        const filteredMenu=menu?.cards.filter(
            (e) =>
              e?.card.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
          return filteredMenu;
    }

    const [restaurant, setRestaurant] = useState();
    useEffect(() => {
      getRestaurantDetails();
    }, []);
    async function getRestaurantDetails() {
      try {
        const dat = await fetch(FETCH_LINK + id);
        if (!dat.ok) {
          throw new Error(`HTTP error! Status: ${dat.status}`);
        }
        const json = await dat.json();
        setRestaurant(findMenu(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR));
      } catch (error) {
        setError(error.message);
      }
    }
    return restaurant;
};
export default useRestaurantMenu;