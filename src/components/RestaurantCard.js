import { Image_Link } from "./Constant";
const RestaurantCard = (props) => {
  const { id, cloudinaryImageId, name, areaName, costForTwo, cuisines } = props;

  return (
    <div className="w-[360px] m-5 h-[330px] text-pink-600 overflow-hidden  font-serif shadow-lg pl-2 " >
      <img key={id}
        className="h-[200px] size-full "
        src={`${Image_Link}${cloudinaryImageId}`}
      />
      <p className="text-xl text-blue-800  mt-1" >
        {name}
      </p>
      <p className="para">{areaName}</p>
      <p className="para">{costForTwo}</p>
      <p>{cuisines?.join(",")}</p>
    </div>
  );
};
export default RestaurantCard;
