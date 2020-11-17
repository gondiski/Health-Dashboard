import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
// import profile from './images/profile.jpg';
class Settings extends Component {
    render() {
        return ( <
            Row >
            <
            Col md = "12" >
            <
            h3 className = "lead text-white my-3" > Account Settings < /h3> < /
            Col > <
            Col md = "12"
            className = "bg-dark rounded shadow-lg" > < Row >
            <
            Col md = "4"
            className = "px-0" >
            <
            ListGroup as = "ul" >
            <
            ListGroup.Item as = "li"
            active className = "list-group-item-dark text-white" >
            General <
            /ListGroup.Item> <
            ListGroup.Item as = "li"
            className = "list-group-item-dark text-white" > Change Password < /ListGroup.Item> <
            ListGroup.Item as = "li"
            className = "list-group-item-dark text-white" >
            Sharing <
            /ListGroup.Item> <
            ListGroup.Item as = "li"
            className = "list-group-item-dark text-white" > Security < /ListGroup.Item> < /
            ListGroup > <
            /Col>  <
            Col md = "8" >
            <
            Row >
            <
            Col xs = { 6 }
            md = { 4 } >
            <
            Image src = "../images/profile.jpg"
            rounded / >
            <
            /Col> < /
            Row > <
            /Col>< /
            Row > < /Col > < /
            Row >
        );
    }
}

export default Settings;