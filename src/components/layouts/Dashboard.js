import React, { Component } from 'react';
import BloodPressure from '../sections/BloodPressure';
import HeartRate from '../sections/HeartRate';
import OxygenLevel from '../sections/OxygenLevel';
import BreathingRate from '../sections/BreathingRate';
import PatientDetails from '../sections/PatientDetails';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
class Dashboard extends Component {
    render() {
        return ( 
            <div className="my-5">
            <Container>
            <Row>
            <Col xl md ="8">
            <Row>
            <BloodPressure/>
            <HeartRate/>
            <OxygenLevel/>
            <BreathingRate/>
            </Row>
            </Col>
            <Col xl md ="4">
            <PatientDetails/>
            </Col>
            </Row>
            </Container>
            </div>
        );
    }
}

export default Dashboard;