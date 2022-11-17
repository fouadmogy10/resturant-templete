import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../../assets/logo.png'
import './NavBar.css'
export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar className="py-1 fixed-top" bg="white" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                        <img src={Logo} title="logo" alt='food'/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto text-center">
                                <Nav.Link href="#header">Home</Nav.Link>
                                <Nav.Link href="#aboutUs">About Us</Nav.Link>
                                <Nav.Link href="#Explore">Explore Foods</Nav.Link>
                                <Nav.Link href="#Testimonials">Reviews</Nav.Link>
                                <Nav.Link href="#link" id="lastNav">1800 789 123</Nav.Link>      
                                    

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
