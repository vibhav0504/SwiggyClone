import { useParams } from "react-router-dom";
import Schimmer from "./Schimmer";
import { useRestaurant } from "../utils/useRestaurant";
import { Image_Link } from "./Constant";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuPage from "./RestaurantMenuPage";

export const RestaurantMenu = () => {
  const para = useParams();
  
  const { id } = para;
  const restaurantDetail = useRestaurant(id);
  const restaurantMenu = useRestaurantMenu(id);
  
  return !restaurantDetail ? (
    <Schimmer />
  ) : (
    <>
      <div className="flex">
        <div className="w-[350px] m-5 h-[350px] text-pink-600 overflow-hidden  font-serif shadow-lg pl-2">
          <img
            className="h-[200px] size-full "
            src={`${Image_Link}${restaurantDetail?.cloudinaryImageId}`}
          />
          <p className="text-blue-900 text-xl font-bold">
            {restaurantDetail?.name}
          </p>
          <p>{restaurantDetail?.city}</p>
          <p>{restaurantDetail?.areaName}</p>
          <p>{restaurantDetail?.avgRating}*</p>
          <p>{restaurantDetail?.costForTwoMessage}</p>
        </div>
        <div className=" p-2 m-2 ">
          <RestaurantMenuPage restaurantMenu={restaurantMenu}/>
        </div>
      </div>
    </>
  );
};
