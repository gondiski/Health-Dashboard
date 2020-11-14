import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GaugeChart from 'react-advanced-gauge-chart';

class BreathingRate extends Component {
    render() {
        return ( <
            Col >
            <
            Card className = "bg-dark text-white shadow-lg" >
            <
            GaugeChart id = "gauge-chart3"
            nrOfLevels = { 20 }
            percent = { 0.45 }
            needleColor = "#fafafa"
            previousValue = { 0.56 }
            /> <
            Card.Body >
            <
            Card.Title className = "lead" >
            Breathing Rate <
            /Card.Title>   < /
            Card.Body > < /
            Card > < /
            Col >
        );
    }
}

export default BreathingRate;