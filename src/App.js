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
import Privacy from './components/sections/Privacy';
import Terms from './components/sections/Terms';
import Signup from './components/layouts/Signup';
import Login from './components/layouts/Login';
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
        />  <
        Route exact path = "/privacy"
        component = { Privacy }
        />  <
        Route exact path = "/terms"
        component = { Terms }
        />  <
        Route exact path = "/signup"
        component = { Signup }
        / > <
        Route exact path = "/login"
        component = { Login }
        / > <
        /
        Switch > <
        /Router> < /
        Container >


        <
        /div >
    );
}

export default App;