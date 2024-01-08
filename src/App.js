import "./App.css";
import React from "react";
import { Route } from "react-router-dom";

import StorePage from "./Pages/StorePage";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import { CartProvider } from "./store/cart-context";
import NavbarComp from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";
import ContactPage from "./Pages/ContactPage";

function App() {
    // const CartCtx = useContext(CartContext);
    return (
        <CartProvider>
            <header>
                <NavbarComp></NavbarComp>
                <h1>Welcome To Quraishi's</h1>
            </header>
            <main>
                <Route path={["/home"]}>
                    <HomePage />
                </Route>
                <Route path='/store'>
                    <StorePage />
                </Route>
                <Route path='/about'>
                    <AboutPage />
                </Route>
                <Route path='/contact-us'>
                    <ContactPage />
                </Route>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </CartProvider>
    );
}

export default App;
