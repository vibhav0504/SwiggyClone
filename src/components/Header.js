import React from "react";
import logo from "./Logo.jpg";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
const Header = () => {
  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.item);
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  // console.log(user);
  // console.log(isAuthenticated);
  return (
    <>
      <div className="flex justify-between bg-red-400 items-center ">
        <img src={logo} className="h-28 p-2 rounded-full " />
        
          <div className="m-2 p-2 text-xl">
            <Link to="/">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/home.png"
                alt="home"
              />
            </Link>
          </div>
       
        {cartItems.length !== 0 ? (
          <div className="mx-2 mt-1 mb-1 p-2 relative">
            <Link to="/cart" className="flex items-center">
              <img 
                width="50"
                height="50"
                src="https://img.icons8.com/glyph-neue/50/shopping-cart.png"
                alt="shopping-cart"
              />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-gray-700 rounded-full px-2 py-1 text-white text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        ) : (
          <div className="mx-2 mt-1 p-2 text-xl ">
            <Link to="/cart">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/glyph-neue/64/shopping-cart.png"
                alt="shopping-cart"
              />
            </Link>
          </div>
        )}

        <p>{isOnline ? "💚" : "💖"}</p>
        {isAuthenticated ? (
          <div div className="relative right-10 flex flex-col" >
          <img className="h-10 w-10 rounded-full" src={user?.picture} alt="User's Profile"  />
          <button
            className="mx-5 p-2 font-serif text-lg"
            onClick={() => logout()}
          >
            {" "}
            {user.given_name}
          </button>
          </div>
        ) : (
          <button
            className="mx-5 p-2 font-serif text-xl"
            onClick={() => loginWithRedirect()}
          >
            {" "}
            Sign-In
          </button>
        )}
      </div>
    </>
  );
};

export default Header;
