import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../Layout/Card/Card";

function MusicComponent() {
    const products = [
        {
            id: 1,
            title: "Colors",
            price: 100,
            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        },
        {
            id: 2,
            title: "Black and white Colors",
            price: 50,
            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        },
        {
            id: 3,
            title: "Yellow and Black Colors",
            price: 70,
            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        },
        {
            id: 4,
            title: "Blue Color",
            price: 100,
            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        },
    ];

    // Define a function to render ProductCards based on received data
    const renderProductCards = () => {
        // Assuming 'products' is an array of product items
        const rows = [];
        for (let i = 0; i < products.length; i += 2) {
            rows.push(
                <Row key={i} className='justify-content-center mb-2'>
                    <Col className='d-flex justify-content-center'>
                        <ProductCard product={products[i]} />
                    </Col>
                    {i + 1 < products.length && (
                        <Col className='d-flex justify-content-center'>
                            <ProductCard product={products[i + 1]} />
                        </Col>
                    )}
                </Row>
            );
        }
        return rows;
    };

    return (
        <Container className='text-center mb-5'>
            <h2 className='mt-5'>MUSIC</h2>
            {products.length > 0 ? (
                renderProductCards()
            ) : (
                <p>No products available</p>
            )}
        </Container>
    );
}

export default MusicComponent;
