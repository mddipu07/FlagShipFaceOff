import {
  createBrowserRouter
} from "react-router";
import Home from "../Pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import About from "../Pages/About";
import PhoneDetails from "../Pages/PhoneDetails";
import ErrorPage from "../Pages/ErrorPage";
import Favourite from "../Pages/Favourite";

 export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
     {
    index:true,
     element:<Home></Home>,
     hydrateFallbackElement: <p>Loading...</p>,
     loader: () => fetch('../phones.json')
    },
    {
    path:'/about',
    element:<About></About>
   },
   {
    path:'/phone-details/:id',
    element: <PhoneDetails></PhoneDetails>,
     hydrateFallbackElement: <p>Loading...</p>,
    loader: () => fetch('../phones.json')
   },
   {
    path:'/favourite',
    Component:Favourite
   }
    ]

  },
]);
