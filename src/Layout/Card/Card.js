import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = (props) => {
    const { title, imageUrl, price } = props.product;
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <Card style={{ width: "18rem", overflow: "hidden" }}>
            <div
                style={{
                    position: "relative",
                    overflow: "hidden",
                }}>
                <Card.Img
                    variant='top'
                    src={imageUrl}
                    style={{
                        transition: "transform 0.3s ease-in-out",
                        transform: isHovered ? "scale(1.2)" : "scale(1)",
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                    }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <Card.Text className='pt-3'>Price : ${price}</Card.Text>
                    <Button variant='primary'>Add to cart</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;