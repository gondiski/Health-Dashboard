import React, { Component } from 'react';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

class Signup extends Component {
    render() {
        return ( < Row className = "d-flex justify-content-center" > < Col className = "mt-4 col-md-6 " >
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
            Row >
            <
            Col md = "6" >
            <
            Form.Label className = "text-white" > Surname < /Form.Label> <
            Form.Control type = "text"
            placeholder = "Doe" / >
            <
            /Col> <
            Col md = "6" >
            <
            Form.Label className = "text-white" > Other name < /Form.Label> <
            Form.Control type = "text"
            placeholder = "John" / >
            <
            /Col> < /
            Row > <
            Form.Label className = "text-white" > Email address < /Form.Label> <
            Form.Control type = "email"
            placeholder = "name@example.com" / >
            <
            Form.Label className = "text-white" > Password < /Form.Label> <
            Form.Control type = "password" / >
            <
            Form.Label className = "text-white" > Password confirmation < /Form.Label> <
            Form.Control type = "password" / >
            <
            /Form.Group> <
            Form.Group controlId = "exampleForm.ControlSelect1" > < /Form.Group><
            Button className = "btn-light mt-1 mb-3" > Sign up < /Button> </Form >
            <
            Card.Footer className = "bg-dark ml-0 pl-0" >
            <
            a href = "/login"
            className = "text-info " > Login < /a> < /
            Card.Footer > <
            /Card.Body> < /
            Card > <
            /Col></Row > );
    }
}

export default Signup;