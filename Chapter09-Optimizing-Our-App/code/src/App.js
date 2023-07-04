// Foodville
import React, { Children, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Concat";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer";

const Instamart = lazy(() => import("./components/Instamart"));

/**
     Header
        - Logo(Title)
        - Nav Items(Right Side)
        - Cart
     Body 
        - Search bar
        - RestrauntList
          - RestaurantCard (many cards)
              - Image
              - Name
              - Rating
              - Cusines
     Footer
      - links
      - Copyright
    
    */

const AppLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer/>
      </>
    );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<Error />,
    children: [
      {
        path: "/",
        element: <Body />,

      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback = {<Shimmer />}>
            <Instamart />
          </Suspense>),
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);