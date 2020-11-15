import React from 'react';
import Dashboard from './components/layouts/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import Header from './components/sections/Header'
function App() {
    return ( <
        div className = "App bg-dark" >
        <Container fluid style={{ height: '100%' }} className="bg-dark">
        <Header/>
        <Dashboard/>
        </Container>
        < /
        div >
    );
}

export default App;