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
            Card.Title className = "lead" > Details < /Card.Title> <
            Card.Subtitle className = "mb-4 text-white" > John Doe < /Card.Subtitle>  <
            Card.Text >
            <
            CardGroup >
            <
            Card className = "bg-dark text-white text-center border-white shadow-lg" >
            <
            Card.Text >
            <
            p className = "mb-0" > 5, 11 < /p> <
            p className = "text-small mb-1" > Height < /p> < /
            Card.Text > <
            /Card> <
            Card className = "bg-dark text-white text-center border-white shadow-lg" >
            <
            Card.Text >
            <
            p className = "mb-0" > 35 < /p> <
            p className = "text-small mb-1" > Age < /p> < /
            Card.Text > <
            /Card> <
            Card className = "bg-dark text-white text-center border-white shadow-lg" >
            <
            Card.Text >
            <
            p className = "mb-0" > 88 Kg < /p> <
            p className = "text-small mb-1" > Weight < /p> < /
            Card.Text > <
            /Card></CardGroup > < /
            Card.Text > <
            Card.Link href = "/overview" > View History < /Card.Link> < /
            Card.Body > <
            /Card> < /
            Col >
        );
    }
}

export default PatientDetails;