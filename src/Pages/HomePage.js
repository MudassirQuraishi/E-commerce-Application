import React, { useContext } from "react";
import NavbarComp from "../Layout/Navbar/Navbar";
import { CartProvider } from "../store/cart-context";
import CartContext from "../store/cart-context";

import HomeSection from "../components/HomeSection";
import CartOffCanvas from "../Cart/UI/CartOffCanvas";
import Footer from "../Layout/Footer/Footer";
const HomePage = () => {
    const CartCtx = useContext(CartContext);
    console.log(CartCtx);
    return (
        <>
            <CartProvider>
                <header>
                    <NavbarComp></NavbarComp>
                    <h1>Welcome To Quraishi's</h1>
                </header>
                <main>
                    {CartCtx.isOpen && <CartOffCanvas />}
                    <HomeSection></HomeSection>
                </main>
            </CartProvider>
            <Footer></Footer>
        </>
    );
};
export default HomePage;
