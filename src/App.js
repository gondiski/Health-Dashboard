import React from 'react';
import Dashboard from './components/layouts/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import Header from './components/sections/Header';
import Overview from './components/layouts/Overview';
import Reports from './components/layouts/Reports';
import Settings from './components/layouts/Settings';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
    return ( 

        <div className = "App" >
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/overview" component={Overview} />
                    <Route exact path="/reports" component={Reports} />
                    <Route exact path="/settings" component={Settings} />
                </Switch>
            </Router>
        </React.Fragment>
        <Container fluid style={{ height: '100%' }} className="bg-dark">
        <Header/>
        <Dashboard/>
        </Container>
        </div >
    );
}

export default App;