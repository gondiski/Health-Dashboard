import React, { Component } from 'react';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';


const url = "localhost:5000/api/login"

class Login extends Component {
    render() {
        return ( <
            Row className = "d-flex justify-content-center" > < Col className = "mt-4 col-md-6 " >
            <
            Card className = "shadow-lg bg-dark text-white" >
            <
            Card.Body >
            <
            Card.Header className = "bg-dark ml-0 pl-0" > <
            Image src = "/icon.png"
            rounded height = "50"
            width = "auto"
            className = "mt-0 px-0" / > Healr < /Card.Header> <
            Form className = "mt-3" >
            <
            Form.Group controlId = "exampleForm.ControlInput1" >
            <
            Form.Label className = "text-white" > Email address < /Form.Label> <
            Form.Control type = "email"
            placeholder = "name@example.com" / >
            <
            Form.Label className = "text-white" > Password < /Form.Label> <
            Form.Control type = "password"
            placeholder = "John Doe" / >
            <
            /Form.Group> <
            Form.Group controlId = "exampleForm.ControlSelect1" > < /Form.Group><
            Button className = "btn-light mt-1 mb-3" > Login < /Button> </Form >
            <
            Card.Footer className = "bg-dark ml-0 pl-0" >
            <
            a href = "/signup"
            className = "text-info" > Sign up < /a> < /
            Card.Footer > <
            /Card.Body> < /
            Card > <
            /Col></Row >
        );
    }
}

export default Login;