import AboutSection from "../components/AboutSection";
import React, { useContext } from "react";
import NavbarComp from "../Layout/Navbar/Navbar";
import { CartProvider } from "../store/cart-context";
import CartContext from "../store/cart-context";
import CartOffCanvas from "../Cart/UI/CartOffCanvas";
import Footer from "../Layout/Footer/Footer";

const AboutPage = () => {
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
                    <AboutSection />
                </main>
            </CartProvider>
            <Footer></Footer>
        </>
    );
};

export default AboutPage;
