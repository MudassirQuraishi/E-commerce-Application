import React, { useContext } from "react";

import CartContext from "../store/cart-context";
import MusicSection from "../components/MusicSection";
import CartOffCanvas from "../Cart/UI/CartOffCanvas";

const StorePage = () => {
    const CartCtx = useContext(CartContext);
    return (
        <>
            {CartCtx.isOpen && <CartOffCanvas />}
            <MusicSection></MusicSection>
        </>
    );
};
export default StorePage;
