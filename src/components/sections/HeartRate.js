import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GaugeChart from 'react-advanced-gauge-chart';

class HeartRate extends Component {
    render() {
        return ( <
            Col >
            <
            Card className = "bg-dark text-white shadow-lg" >
            <
            GaugeChart id = "gauge-chart4"
            percent = { 0.75 }
            needleColor = "#fafafa"
            nrOfLevels = { 20 }
            previousValue = { 0.56 }
            /> <
            Card.Body >
            <
            Card.Title className = "lead" >
            Heart Rate <
            /Card.Title>    < /
            Card.Body > < /
            Card > < /Col >
        );
    }
}

export default HeartRate;