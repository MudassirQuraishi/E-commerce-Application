import React, { useRef } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import classes from "./ContactPage.module.css";
const ContactPage = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneNumberRef = useRef();
    const formSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const formDetails = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                number: phoneNumberRef.current.value,
            };
            await axios.post(
                "https://ecom-2863d-default-rtdb.firebaseio.com/forms.json",
                formDetails
            );
            nameRef.current.value = "";
            emailRef.current.value = "";
            phoneNumberRef.current.value = "";
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={classes.form}>
            <Form onSubmit={formSubmitHandler}>
                <Form.Group as={Row} className='mb-3'>
                    <Form.Label column sm={2} className={classes.label}>
                        Name :
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type='text'
                            placeholder='Enter Your Name'
                            ref={nameRef}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='mb-3'>
                    <Form.Label column sm={2} className={classes.label}>
                        Email :
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type='email'
                            placeholder='Enter your email'
                            ref={emailRef}
                        />
                    </Col>
                </Form.Group>
                <Form.Group
                    as={Row}
                    className='mb-3'
                    controlId='formHorizontalPassword'>
                    <Form.Label column sm={2} className={classes.label}>
                        Phone Number :
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type='number'
                            placeholder='Enter your phone number'
                            ref={phoneNumberRef}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='mb-3'>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type='submit'>Sign in</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};
export default ContactPage;
