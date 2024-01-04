import { useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartContext from "../../store/cart-context";
import ListGroup from "react-bootstrap/ListGroup";
import classes from "./CartOffCanvas.module.css";
import { Button } from "react-bootstrap";

const CartOffCanvas = () => {
    const cartCtx = useContext(CartContext);

    const closeCartHandler = () => {
        cartCtx.closeCart();
    };
    console.log(cartCtx.cartItems);

    const cartItems = cartCtx.cartItems.map((cartItem) => (
        <ListGroup
            horizontal
            className={classes["list-group-title"]}
            key={cartItem.id}>
            <ListGroup.Item className={classes["list-title"]}>
                <figure className={classes["list-figure"]}>
                    <img
                        src={cartItem.imageUrl}
                        alt='blue-color'
                        className={classes["list-image"]}
                    />
                    <figcaption
                        style={{
                            maxWidth: "10px",
                            fontSize: "10px",
                            marginRight: "10px",
                        }}>
                        {cartItem.title}
                    </figcaption>
                </figure>
            </ListGroup.Item>

            <ListGroup.Item className={classes["list-title"]}>
                ${cartItem.price}
            </ListGroup.Item>
            <ListGroup.Item className={classes["list-action"]}>
                <input value={cartItem.quantity} />
                <button>Remove</button>
            </ListGroup.Item>
        </ListGroup>
    ));

    return (
        <>
            <Offcanvas show={cartCtx.isOpen} onHide={closeCartHandler}>
                <Offcanvas.Header closeButton onClick={closeCartHandler}>
                    <Offcanvas.Title>Your Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup
                        horizontal
                        className={classes["list-group-title"]}>
                        <ListGroup.Item className={classes["list-title"]}>
                            Item
                        </ListGroup.Item>
                        <ListGroup.Item className={classes["list-title"]}>
                            Price
                        </ListGroup.Item>
                        <ListGroup.Item className={classes["list-title"]}>
                            Quantity
                        </ListGroup.Item>
                    </ListGroup>
                    {cartItems}
                    <Button variant='primary' className='text-center'>
                        Purchase
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default CartOffCanvas;
