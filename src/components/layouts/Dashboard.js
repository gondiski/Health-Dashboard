import React, { Component } from 'react';
import BloodPressure from '../sections/BloodPressure';
import HeartRate from '../sections/HeartRate';
import OxygenLevel from '../sections/OxygenLevel';
import BreathingRate from '../sections/BreathingRate';
import PatientDetails from '../sections/PatientDetails';
import CalendarView from '../sections/CalendarView';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
class Dashboard extends Component {
    render() {
        return ( 
            <div className="my-5">
            <Container fluid>
            <Row>
            <Col xl="5" md ="4">
            <Row>
            <BloodPressure/>
            <HeartRate/>
            <OxygenLevel/>
            <BreathingRate/>
            </Row>
            </Col>
            <Col xl="3" md ="4">
            <PatientDetails/>
            </Col>
            <Col xl="2" md = "4">
            <CalendarView/>
            </Col>
            </Row>
            </Container>
            </div>
        );
    }
}

export default Dashboard;