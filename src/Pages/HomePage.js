import React, { useContext } from "react";

import MusicSection from "../components/MusicSection";
import CartOffCanvas from "../Cart/UI/CartOffCanvas";
import CartContext from "../store/cart-context";
const HomePage = () => {
    const CartCtx = useContext(CartContext);
    return (
        <>
            <main>
                {CartCtx.isOpen && <CartOffCanvas />}
                <MusicSection></MusicSection>
            </main>
        </>
    );
};
export default HomePage;
