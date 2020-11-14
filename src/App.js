import React, { Component } from 'react';
import Dashboard from './components/layouts/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './components/sections/Header'
import FontAwesome from '@fortawesome/fontawesome-free';
function App() {
    return ( <
        div className = "App bg-dark" >
        <Container fluid className="bg-dark">
        <Header/>
        <Dashboard/>
        </Container>
        < /
        div >
    );
}

export default App;