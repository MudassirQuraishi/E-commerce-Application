import React, { useContext } from "react";
import CartIcon from "../../Icons/CarIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
    const CartCtx = useContext(CartContext);
    const numberOfCartItems = CartCtx.cartItems.length;
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};
export default CartButton;
