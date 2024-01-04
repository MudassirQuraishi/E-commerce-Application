import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import aboutUsImage from "../images/about-us-1.jpg";

const AboutPage = () => {
    return (
        <Container>
            <Row className='mt-5'>
                <Col md={6}>
                    <Image
                        className='p-4  '
                        src={aboutUsImage}
                        alt="Quraishi's Store"
                        fluid
                        style={{
                            width: "70%",
                            height: "90%",
                            objectFit: "cover",
                        }}
                    />
                </Col>
                <Col md={6}>
                    <h2>Welcome to Quraishi's</h2>
                    <p>
                        At Quraishi's, we're dedicated to providing high-quality
                        products and exceptional customer service. Our online
                        store offers a wide range of items, from clothing and
                        accessories to electronics, home essentials, and more.
                    </p>
                    <p>
                        We believe in making your shopping experience effortless
                        and enjoyable. Our team carefully curates products from
                        trusted suppliers to ensure the best quality and
                        authenticity.
                    </p>
                    <p>
                        Whether you're looking for the latest fashion trends,
                        technological innovations, or everyday necessities,
                        Quraishi's has something for everyone. We value our
                        customers' satisfaction and aim to exceed your
                        expectations.
                    </p>
                    <p>
                        Thank you for choosing Quraishi's. Feel free to explore
                        our collection and reach out to our support team for any
                        assistance. Happy shopping!
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;
