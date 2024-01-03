import "./App.css";
import React, { useContext } from "react";
import Footer from "./Layout/Footer/Footer";
import NavbarComp from "./Layout/Navbar/Navbar";
import MusicSection from "./components/MusicSection";
import CartOffCanvas from "./Cart/UI/CartOffCanvas";
import CartContext, { CartProvider } from "./store/cart-context";

function App() {
    const CartCtx = useContext(CartContext);
    return (
        <>
            <CartProvider>
                <header>
                    <NavbarComp></NavbarComp>
                    <h1>Welcome To Quraishi's</h1>
                </header>

                <main>
                    {CartCtx.isOpen && <CartOffCanvas />}
                    <MusicSection></MusicSection>
                </main>
            </CartProvider>

            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
}

export default App;
