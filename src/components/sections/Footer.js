import React, { Component } from 'react';
import { Col, Row, Image } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return ( <
            Row >
            <
            Col md = "12"
            className = "mx-4 my-5" >
            <
            Row >
            <
            Col md = "3"
            className = "text-white d-flex justify-content-center align-content-center" >
            <
            div >
            <
            Image src = "./icon.png"
            width = "auto"
            height = "50"
            rounded / >
            <
            h3 > Healr < /h3> < /div > < /Col >   < /
            Row > < /
            Col > <
            /
            Row >
        );
    }
}

export default Footer;