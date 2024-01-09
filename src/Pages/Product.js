import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const Product = () => {
    const productImages = [
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    ];
    const productInformation = {
        title: "Colors",
        description: "Beautiful painting of describing the richness of colors",
        price: 50,
        dimensions: "10x15x5 inches",
        material: "Oil-painting",
        // Add more specifications as needed
    };
    const productReviews = [
        {
            comment: "Super Product",
            rating: 5,
            reviewer: "John Doe",
            date: "2023-01-15",
        },
        // Add more reviews as needed
    ];

    return (
        <Container className='my-5'>
            <Row>
                <Col md={6}>
                    <Carousel>
                        {productImages.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    src={image}
                                    alt={`Product ${index}`}
                                    className='d-block w-100'
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col md={6}>
                    <ProductInformation product={productInformation} />
                    <ProductReviews reviews={productReviews} />
                </Col>
            </Row>
        </Container>
    );
};

const ProductInformation = ({ product }) => {
    return (
        <div>
            <h2>{product.title}</h2>
            <p className='text-muted'>Price: ${product.price}</p>
            <p>{product.description}</p>
            <Row>
                <Col md={6}>
                    <h4>Specifications:</h4>
                    <ul>
                        <li>Dimensions: {product.dimensions}</li>
                        <li>Material: {product.material}</li>
                    </ul>
                </Col>
                <Col md={6}>
                    <button className='btn btn-primary'>Add to Cart</button>
                </Col>
            </Row>
        </div>
    );
};

const ProductReviews = ({ reviews }) => {
    return (
        <div className='mt-4'>
            <h3>Reviews</h3>
            {reviews.map((review, index) => (
                <div key={index} className='card mb-3'>
                    <div className='card-body'>
                        <p>{review.comment}</p>
                        <p className='text-muted'>Rating: {review.rating}/5</p>
                        <p className='text-muted'>By: {review.reviewer}</p>
                        <p className='text-muted'>Date: {review.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Product;
