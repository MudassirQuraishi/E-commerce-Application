import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className='bg-dark text-light py-1 mt-auto '>
            <Container>
                <Row className='justify-content-center mb-2'>
                    <Col md={6} className='d-flex justify-content-center'>
                        <h5>Footer Content</h5>
                        <p>
                            This is a simple footer example using React
                            Bootstrap.
                        </p>
                    </Col>
                    <Col
                        md={6}
                        className='d-flex justify-content-center'
                        style={{ display: "flex", flexDirection: "row" }}>
                        <p className='m-2'>FaceBook</p>
                        <p className='m-2'>FaceBook</p>
                        <p className='m-2'>FaceBook</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <p>&copy; {new Date().getFullYear()} YourWebsite.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
