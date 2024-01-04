import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import StorePage from "./Pages/StorePage";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
const router = createBrowserRouter([
    {
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "/store",
        element: <StorePage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
]);

function App() {
    // const CartCtx = useContext(CartContext);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
