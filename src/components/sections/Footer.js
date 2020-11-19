import React, { Component } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

class Footer extends Component {
    render() {
        return ( <
            Row className = "mx-4 my-5  py-5" >

            <
            Col md = "4"
            className = "text-white d-flex justify-content-start align-content-center" >
            <
            div >
            <
            Image src = "./icon.png"
            width = "auto"
            height = "50" / >
            <
            h3 > Healr < /h3>  <
            p className = "small text-white" > We believe your health information should be accessible to you everywhere and everytime. < /p>  <
            FeatherIcon icon = "facebook"
            className = "text-white mb-3" / >
            <
            FeatherIcon icon = "twitter"
            className = "text-white mb-3 ml-1" / >
            <
            FeatherIcon icon = "instagram"
            className = "text-white mb-3 ml-1" / >
            <
            /div > < /Col >
            <
            Col md = "2" >
            <
            /Col> <
            Col md = "6"
            className = "text-right" >
            <
            h6 className = "text-uppercase text-white" > Navigation < /h6> <
            p > < a href = "/"
            className = "text-secondary mb-0 pb-0" > FAQs < /a></p >
            <
            p > < a href = "/"
            className = "text-secondary mb-0 pb-0" > Documentation < /a></p >
            <
            p > < a href = "/"
            className = "text-secondary mb-0 pb-0" > Newsletter < /a></p >
            <
            p > < a href = "/"
            className = "text-secondary mb-0 pb-0" > Media < /a></p >
            <
            /Col> <
            Col md = "12"
            className = "border-top border-light" >
            <
            Row >
            <
            Col md = "4" >
            <
            p className = "small text-white" > Copyright & copy 2020 Healr.All rights reserved. < /p> < /Col > <
            Col md = "4" >
            <
            p > < a href = "/terms"
            className = "text-info" > Terms and conditions < /a></p >
            <
            /Col><
            Col md = "4" >
            <
            p > < a href = "/privacy"
            className = "text-info" > Privacy policy < /a></p >
            <
            /Col>  < /
            Row > <
            /Col> < /
            Row >
        );
    }
}

export default Footer;