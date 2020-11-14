import React, { Component } from 'react';
import BloodPressure from '../sections/BloodPressure';
import HeartRate from '../sections/HeartRate';
import OxygenLevel from '../sections/OxygenLevel';
import BreathingRate from '../sections/BreathingRate';
import Row from 'react-bootstrap/row';
class Dashboard extends Component {
    render() {
        return ( 
            <div>
            <Row>
            <BloodPressure/>
            <HeartRate/>
            <OxygenLevel/>
            <BreathingRate/>
            </Row>
            </div>
        );
    }
}

export default Dashboard;