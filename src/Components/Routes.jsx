import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Error from "../Pages/Error";
import Location from "../Pages/Location";

const router = createBrowserRouter([
    { path:"/", element:<Home />, errorElement:<Error /> },
    { path: "/about", element: <About />, errorElement:<Error /> },
    { path: "/location/:id", element: <Location />, errorElement:<Error /> },
    { path: "*", element: <Error /> }  // toutes les routes non trouvées retounent sur Error
]);

function Routes() {
    return(
        <RouterProvider router={router} />
    )
}

export default Routes;