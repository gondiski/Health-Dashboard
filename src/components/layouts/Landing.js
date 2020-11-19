import React, { useState } from 'react';
import { Col, Row, Button, Image, Modal, Form } from 'react-bootstrap';
import Footer from '../sections/Footer';
import FeatherIcon from 'feather-icons-react';

function Landing() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return ( <
        Row >
        <
        Col className = "bg-dark shadow-lg mx-4" >
        <
        Row >
        <
        Col md = "6"
        lg = "8" >
        <
        h1 className = "lead display-3 text-white" > Take charge of your health. < /h1> <
        p className = "text-white" > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. < /p> <
        Button className = "btn btn-light rounded mb-3" > More < /Button> < /
        Col >
        <
        Col className = "align-self-center" >
        <
        Image src = "./icon.png"
        className = "mx-auto d-block"
        rounded / >
        <
        /Col> < /
        Row > < /
        Col >
        <
        Col md = "12"
        className = "mx-4 text-center mt-3" >
        <
        h1 className = "lead display-4 text-white" > About < /h1>   <
        Row > < Col className = "col-md-8 offset-md-2" > <
        p className = "lead text-white" > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. < /p> </Col > < /
        Row > < /
        Col >
        <
        Col md = "12"
        className = "mx-auto text-center mt-3" >
        <
        h1 className = "lead display-4 text-white mb-5" > Features < /h1>   <
        Row > < Col className = "col-md-4" >
        <
        FeatherIcon icon = "watch"
        size = "44"
        className = "text-white mb-3" / >
        <
        h3 className = "text-white lead" > Timed Sharing < /h3> <
        p className = " text-white" > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam. < /p> </Col >
            <
            Col className = "col-md-4" >
            <
            FeatherIcon icon = "activity"
        size = "44"
        className = "text-white mb-3" / >
        <
        h3 className = "text-white lead" > Reports < /h3> <
        p className = " text-white" > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam. < /p> </Col >
            <
            Col className = "col-md-4" >
            <
            FeatherIcon icon = "shield"
        size = "44"
        className = "text-white mb-3" / >
        <
        h3 className = "text-white lead" > Encrypted < /h3> <
        p className = " text-white" > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam. < /p> </Col >
            <
            /
        Row > < /
        Col >
        <
        Col md = "12"
        className = "bg-dark shadow-lg py-5 mt-5" >
        <
        Row className = "d-flex justify-content-space-between align-content-center" >
        <
        Col md = "8" > < h1 className = "lead text-white" > Ready to get started ? < /h1> < /Col > < Col >
        <
        Button className = "btn btn-light"
        onClick = { handleShow } > Sign up < /Button></Col >
        <
        Modal show = { show }
        onHide = { handleClose } >
        <
        Modal.Header closeButton >
        <
        Modal.Title > Sign up < /Modal.Title> < /
        Modal.Header > <
        Modal.Body >
        <
        Form >
        <
        Form.Group controlId = "formBasicEmail" >
        <
        Form.Label > Email address < /Form.Label> <
        Form.Control type = "email"
        placeholder = "Enter email" / >
        <
        Form.Text className = "text-muted" >
        We 'll never share your email with anyone else. < /
        Form.Text > <
        /Form.Group>

        <
        Form.Group controlId = "formBasicPassword" >
        <
        Form.Label > Password < /Form.Label> <
        Form.Control type = "password"
        placeholder = "Password" / >
        <
        /Form.Group> <
        Form.Group controlId = "formBasicCheckbox" >
        <
        Form.Check type = "checkbox"
        label = "Check me out" / >
        <
        /Form.Group> <
        Button variant = "primary"
        type = "submit" >
        Submit <
        /Button> < /
        Form > <
        /Modal.Body> <
        Modal.Footer >
        <
        Button variant = "secondary"
        onClick = { handleClose } >
        Close <
        /Button> <
        Button variant = "primary"
        onClick = { handleClose } >
        Login <
        /Button> < /
        Modal.Footer > <
        /Modal>< /
        Row > < /
        Col > <
        Footer / > <
        /Row>
    );
}

export default Landing;