import React from 'react';
import { Col, Row, Card, Button, Form, Image } from 'react-bootstrap';

function Forgot() {
    return ( <
        Row className = "justify-content-center" >
        <
        Col md = "6" >
        <
        Card className = "shadow-lg bg-dark text-white" >
        <
        Card.Body >
        <
        Card.Header className = "bg-dark pl-0 ml-0" > <
        Image src = "/icon.png"
        rounded height = "50"
        width = "auto" / > Healr < /Card.Header> <
        Form className = "mt-3" >
        <
        Form.Group controlId = "exampleForm.ControlInput1" >
        <
        Form.Label className = "text-white" > Email address < /Form.Label> <
        Form.Control type = "email"
        placeholder = "name@example.com" / >
        <
        /Form.Group> <
        Form.Group controlId = "exampleForm.ControlSelect1" > < /Form.Group><
        Button className = "btn-light mt-1 mb-3" > Reset password < /Button> </Form >
        <
        Card.Footer className = "bg-dark ml-0 pl-0 text-white" >
        <
        a href = "/login"
        className = "text-info " > Login < /a> | <
        a href = "/signup"
        className = "text-info " > Sign up < /a > < /
        Card.Footer > <
        /Card.Body> < /
        Card >
        <
        /Col> < /
        Row >
    );
}

export default Forgot;