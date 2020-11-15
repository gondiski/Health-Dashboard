import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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
            Card.Subtitle className = "mb-2 text-white" > John Doe < /Card.Subtitle> <
            Card.Text >
            Some quick example text to build on the card title and make up the bulk of the card 's content. < /
            Card.Text > <
            Card.Link href = "#" > View History < /Card.Link> < /
            Card.Body > <
            /Card> < /
            Col >
        );
    }
}

export default PatientDetails;