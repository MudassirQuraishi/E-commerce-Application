import React, { createContext, useState } from "react";

const CartContext = createContext({
    isOpen: true,
    closeCart: () => {},
    openCart: () => {},
    addToCart: () => {},
    cartItems: [],
});

export const CartProvider = (props) => {
    const [show, setShow] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const addToCartHandler = (product) => {
        const isItemInCart = cartItems.some((item) => item.id === product.id);
        if (!isItemInCart) {
            setCartItems((prevItems) => [...prevItems, product]);
        } else {
            alert("Product already in cart");
        }
    };
    const cartCloseHandler = () => {
        setShow(false);
    };
    const showCartHandler = () => {
        setShow(true);
    };
    const cartContext = {
        isOpen: show,
        cartItems: cartItems,
        closeCart: cartCloseHandler,
        openCart: showCartHandler,
        addToCart: addToCartHandler,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;
