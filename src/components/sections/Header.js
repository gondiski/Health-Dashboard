import React from "react"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import { NavLink, Link } from 'react-router-dom';

const Header = ({ loggedIn, username }) => {
    return ( <
        Container > <
        Navbar expand = "lg"
        bg = "dark"
        variant = "dark" >
        <
        React.Fragment >
        <
        Navbar.Brand href = "/" > Healr < /Navbar.Brand> <
        Nav className = "mr-auto" >
        <
        Nav.Link href = "/dashboard" > Dashboard < /Nav.Link> <
        Nav.Link href = "/overview" > Overview < /Nav.Link> <
        Nav.Link href = "/reports" > Reports < /Nav.Link> <
        Nav.Link href = "/settings" > Settings < /Nav.Link> < /
        Nav >
        <
        /React.Fragment> < /
        Navbar > < /
        Container >
    );
}

export default Header;