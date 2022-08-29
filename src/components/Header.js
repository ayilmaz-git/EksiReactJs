import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import eksi from "../assets/img/eksi.png"



export default class Header extends Component {
  render() {
    return (
      <div>
    <Navbar bg="light" variant="light" expand="lg">
          <Container>
            <Navbar.Brand href="/"><img style={{ width: "200px" }} src={eksi} /><code>via ReactJS</code></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            light="true"
          >
            <Nav.Link href="#gundem">Gündem</Nav.Link>
            <Nav.Link href="#debe">Debe</Nav.Link>
            <NavDropdown title="Kanalallar" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#siyaset">#Siyaset</NavDropdown.Item>
              <NavDropdown.Item href="#troll">
                #Troll
              </NavDropdown.Item>
              <NavDropdown.Item href="#haber">
                #Haber
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}