import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" >TodoApp</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" >Home</Nav.Link>
                    <Nav.Link as={Link} to="/todo" >Todo</Nav.Link>
                    <Nav.Link as={Link} to="/about" >About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;