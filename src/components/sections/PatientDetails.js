import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

class PatientDetails extends Component {
    render() {
        return ( <
            Col >
            <
            Card className = "bg-dark shadow-lg text-white" >
            <
            Card.Body >
            <
            Card.Title className = "lead" > Patient details < /Card.Title> <
            Card.Subtitle className = "mb-4 text-white" > John Doe < /Card.Subtitle> <
            Card.Text >
            <
            CardGroup >
            <
            Card className = "bg-dark text-white mr-1 text-center border-0 shadow-lg" >
            <
            Card.Text >
            <
            h6 > 5, 11 < /h6> <
            p className = "text-uppercase text-small" > height < /p> < /
            Card.Text > <
            /Card> <
            Card className = "bg-dark text-white mx-auto text-center border-0 shadow-lg" >
            <
            Card.Text >
            <
            h6 > 35 < /h6> <
            p className = "text-uppercase text-small" > age < /p> < /
            Card.Text > <
            /Card> <
            Card className = "bg-dark text-white ml-1 text-center border-0 shadow-lg" >
            <
            Card.Text >
            <
            h6 > 88 Kg < /h6> <
            p className = "text-uppercase text-small" > weight < /p> < /
            Card.Text > <
            /Card></CardGroup > < /
            Card.Text > <
            Card.Link href = "#" > View History < /Card.Link> < /
            Card.Body > <
            /Card> < /
            Col >
        );
    }
}

export default PatientDetails;