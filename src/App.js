import React from 'react';
import Dashboard from './components/layouts/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import Header from './components/sections/Header';
import Overview from './components/layouts/Overview';
import Reports from './components/layouts/Reports';
import Settings from './components/layouts/Settings';
import Landing from './components/layouts/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
    return (

        <
        div className = "App" >

        <
        Container className = "bg-dark" >
        <
        Header / >

        <
        Router >
        <
        Switch >
        <
        Route exact path = "/"
        component = { Landing }
        /> <
        Route exact path = "/dashboard"
        component = { Dashboard }
        />  <
        Route exact path = "/overview"
        component = { Overview }
        /> <
        Route exact path = "/reports"
        component = { Reports }
        /> <
        Route exact path = "/settings"
        component = { Settings }
        /> < /
        Switch > <
        /Router> < /
        Container >


        <
        /div >
    );
}

export default App;