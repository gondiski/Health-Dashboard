import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import Footer from '../sections/Footer';
class Landing extends Component {
    render() {
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
            Col > <
            /Row> < /
            Col >
            <
            Footer / > <
            /Row>
        );
    }
}

export default Landing;