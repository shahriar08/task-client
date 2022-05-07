import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBer = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Data</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#allData">Show All Data</Nav.Link>
                    <Nav.Link href="#newData">Add New Data</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBer;