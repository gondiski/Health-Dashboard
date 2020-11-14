import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GaugeChart from 'react-advanced-gauge-chart';

class BloodPressure extends Component {
    render() {
        return ( <
            Col > < Card className = "bg-dark text-white shadow-lg" >
            <
            GaugeChart id = "gauge-chart1"
            percent = { 0.11 }
            nrOfLevels = { 20 }
            needleColor = "#fafafa"
            previousValue = { 0.89 }
            />  <
            Card.Body >
            <
            Card.Title className = "lead" > Blood Pressure < /Card.Title>  < /
            Card.Body > <
            /Card> < /
            Col >
        );
    }
}
export default BloodPressure;