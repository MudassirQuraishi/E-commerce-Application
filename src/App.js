import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import NavbarComp from "./Layout/Navbar/Navbar";
import { CartProvider } from "./store/cart-context";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
const router = createBrowserRouter([
    {
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "/store",
        element: <HomePage />,
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
            <CartProvider>
                <header>
                    <NavbarComp></NavbarComp>
                    <h1>Welcome To Quraishi's</h1>
                </header>
                <RouterProvider router={router} />
            </CartProvider>

            <Footer></Footer>
        </>
    );
}

export default App;
