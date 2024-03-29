import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartButton from "./CartButton";

const NavbarComp = () => {
    const CartCtx = useContext(CartContext);
    const openCartHandler = () => {
        CartCtx.openCart();
    };

    return (
        <Navbar
            key='md'
            expand='md'
            bg='dark'
            data-bs-theme='dark'
            className=' mb-5 fixed-top'>
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>
                    Quraishi's Store
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-'md'`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-'md'`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-'md'`}
                    placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title
                            id={`offcanvasNavbarLabel-expand-'md'`}>
                            Quarishi's Store
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className='justify-content-end flex-grow-1 pe-3'>
                            <Nav.Link as={Link} to='/home'>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to='/store'>
                                Store
                            </Nav.Link>
                            <Nav.Link as={Link} to='/about'>
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to='/contact-us'>
                                Contact Us
                            </Nav.Link>
                        </Nav>
                        <Form className='d-flex'>
                            <Form.Control
                                type='search'
                                placeholder='Search'
                                className='me-2'
                                aria-label='Search'
                            />
                            <Button variant='outline-success'>Search</Button>
                        </Form>
                        <Nav.Item className='mt-1' onClick={openCartHandler}>
                            <CartButton></CartButton>
                        </Nav.Item>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default NavbarComp;
