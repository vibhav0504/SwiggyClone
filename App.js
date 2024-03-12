import React, { lazy, Suspense } from "react";
import { Auth0Provider } from '@auth0/auth0-react';
import "./index.css";
import { RestaurantMenu } from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Error from "./src/components/Error";
import Schimmer from "./src/components/Schimmer";
import store from "./src/utils/store";
const Cart = lazy(() => import("./src/components/Cart"));
// import  from "./src/components/";
// lazy loading is also known as code- splitting
// dynamic import
// onDemand loading
// Bundle Chunking
const App = () => {
  return (
    <Provider store={store} >
        <Header />
        <Outlet />
        <Footer />
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Schimmer />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Auth0Provider
    domain="dev-ywzqco32tpbngx31.us.auth0.com"
    clientId="z3UnQU4rpAEodbBTIb094h9H0DdSe5p7"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={appRouter} />
  </Auth0Provider>);
