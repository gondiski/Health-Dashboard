import React, { Component } from 'react';
import { Col, Row, ListGroup, Image, Form, Button } from 'react-bootstrap';
class Settings extends Component {
    render() {
        return ( <
            Row className = "mx-3" >
            <
            Col md = "12" >
            <
            h3 className = "lead text-white my-3" > Account Settings < /h3> < /
            Col > <
            Col md = "12 mx-1"
            className = "bg-dark rounded shadow-lg" > < Row >
            <
            Col md = "4"
            className = "px-0" >
            <
            ListGroup as = "ul" >
            <
            ListGroup.Item as = "li"
            className = "bg-dark text-white" >
            General <
            /ListGroup.Item> <
            ListGroup.Item as = "li"
            className = "bg-dark text-white" > Change Password < /ListGroup.Item> <
            ListGroup.Item as = "li"
            className = "bg-dark text-white" >
            Sharing <
            /ListGroup.Item> <
            ListGroup.Item as = "li"
            className = "bg-dark text-white" > Security < /ListGroup.Item> < /
            ListGroup > <
            /Col>
            
            <
            Col md = "8" >
            <
            Row >
            <
            Col xs = { 6 }
            md = { 4 }
            className = "mt-1" >
            <
            Image src = "https://picsum.photos/id/1027/100/100"
            rounded / >
            <
            /Col> < /
            Row > < Form className = "mt-3" >
            <
            Form.Group controlId = "exampleForm.ControlInput1" >
            <
            Form.Label className = "text-white" > Email address < /Form.Label> <
            Form.Control type = "email"
            placeholder = "name@example.com" / >
            <
            Form.Label className = "text-white" > Surname < /Form.Label> <
            Form.Control type = "text"
            placeholder = "John Doe" / >
            <
            /Form.Group> <
            Form.Group controlId = "exampleForm.ControlSelect1" >
            <
            Row >
            <
            Col md = "6" >
            <
            Form.Label className = "text-white" > First Name < /Form.Label> <
            Form.Control type = "text" >
            <
            /
            Form.Control > < /Col> <
            Col md = "6" >
            <
            Form.Label className = "text-white" > Phone Number < /Form.Label> <
            Form.Control type = "text" >
            <
            /
            Form.Control > < /Col> < /Row > < /
            Form.Group > <
            Form.Group controlId = "exampleForm.ControlTextarea1" >
            <
            Form.Label className = "text-white" > Bio < /Form.Label> <
            Form.Control as = "textarea"
            rows = { 3 }
            />  < /
            Form.Group > <
            Button className = "btn-light mt-1" > Save changes < /Button> < /
            Form > < /
            Col > < /
            Row > < /Col > < /
            Row >
        );
    }
}

export default Settings;