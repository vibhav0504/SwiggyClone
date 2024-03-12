import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  const clearCartItems = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div>
        <div className="flex  ">
          <div className=" italic font-bold mx-auto p-2  mt-3 text-5xl text-center">
            {" "}
            Order List
          </div>
          {cartItems.length > 0 && (
            <button
              className="mr-5 my-3 py-2 px-4 border-2 border-solid border-white-500 rounded-md italic text-black bg-white-400"
              onClick={() => clearCartItems()}
            >
              Clear Cart
            </button>
          )}
        </div>
        {cartItems.map((element, index) => (
          <>
            <div
              key={index}
              className="flex justify-between p-2 m-3 rounded-md  py-2 px-5"
            >
              <p className="text-xl text-blue-800">{element?.name}</p>
              <p className="text-xl pr-20">
                {element?.price / 100 || "200"} Rs
              </p>
            </div>
          </>
        ))}
      </div>

    </>
  );
};
export default Cart;
