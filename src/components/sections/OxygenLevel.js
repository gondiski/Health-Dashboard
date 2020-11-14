import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GaugeChart from 'react-advanced-gauge-chart';

class OxygenLevel extends Component {
    render() {
        return ( <
            Col > <
            Card className = "bg-dark text-white shadow-lg" >
            <
            GaugeChart id = "gauge-chart2"
            nrOfLevels = { 20 }
            needleColor = "#fafafa"
            percent = { 0.25 }
            previousValue = { 0.36 }
            /> <
            Card.Body >
            <
            Card.Title className = "lead" >
            Oxygen Level <
            /Card.Title> < /
            Card.Body > < /
            Card > < /
            Col >
        );
    }
}
export default OxygenLevel;