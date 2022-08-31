import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/1">Question1</Nav.Link>
                        <Nav.Link href="/2">Question2</Nav.Link>
                        <Nav.Link href="/3">Question3</Nav.Link>
                        <Nav.Link href="https://anmol-react-portfolio.netlify.app/" target={'_blank'}>Question4</Nav.Link>
                        <Nav.Link href="/10">Question5</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar