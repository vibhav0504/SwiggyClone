import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ShowMenu = ({menu}) => {
  const dispatch = useDispatch();

  const handle = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      {menu
        .map((filteredElem, index) => (
          <div key={index} className="flex justify-between p-2 m-1 rounded-md">
            <div className="w-[500px]">
              <p className="text-xl text-yellow-300">{filteredElem?.card?.info?.name}</p>
              <p className="text-white">
                {filteredElem?.card?.info?.description || "No Description"}
              </p>
              <button
                className="m-2 py-1 px-3 border-2 border-solid border-white-500 rounded-md text-white"
                onClick={() => handle(filteredElem?.card?.info)}
              >
                +
              </button>
              {/* <button
                className="m-2 py-1 px-3 border-2 border-solid border-white-500 rounded-md text-white"
                onClick={() => deleteItem(filteredElem?.card?.info)}
              >
                -
              </button> */}
            </div>
            <div className="flex flex-col items-center justify-around">
              <img
                className="w-[100px] rounded-full p-2 align-middle"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${filteredElem?.card?.info?.imageId}`}
                alt="Loading..."
              />
              <p className="text-xl">{filteredElem?.card?.info?.price / 100 || "200"}₹</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default ShowMenu;
