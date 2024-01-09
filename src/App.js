import "./App.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import StorePage from "./Pages/StorePage";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import { CartProvider } from "./store/cart-context";
import NavbarComp from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";
import ContactPage from "./Pages/ContactPage";
import Product from "./Pages/Product";

function App() {
    // const CartCtx = useContext(CartContext);
    return (
        <CartProvider>
            <header>
                <NavbarComp></NavbarComp>
                <h1>Welcome To Quraishi's</h1>
            </header>
            <main>
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/home' />
                    </Route>
                    <Route path='/home'>
                        <HomePage />
                    </Route>
                    <Route path='/store'>
                        <StorePage />
                    </Route>
                    <Route path='/products/:title' exact>
                        <Product />
                    </Route>
                    <Route path='/about'>
                        <AboutPage />
                    </Route>
                    <Route path='/contact-us'>
                        <ContactPage />
                    </Route>
                </Switch>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </CartProvider>
    );
}

export default App;
