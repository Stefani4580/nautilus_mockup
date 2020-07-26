import React from "react";
import "./App.css";
import matches from "./assets/matches.png";
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';




function App() {
  return (
    <Container fluid>
      <Row className="title">
        <Col>
          <Carousel.Caption>
            <div className="title-text">
              <h6>ISSUE 79</h6>
              <h1>Catalyst</h1>
              <h7>Agents of change</h7>
            </div>
          </Carousel.Caption>
          <Image className="matches" src={require("./assets/matches.png")} />
        </Col>
      </Row>
      <Row className="navbar">
        <Navbar  expand="lg">
          <Navbar.Brand href="#home"><i class="fas fa-bullseye"></i>   Nautilus</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">ISSUES</Nav.Link>
              <Nav.Link href="#topics">TOPICS</Nav.Link>
              <Nav.Link href="#blog">BLOG</Nav.Link>
              <Nav.Link href="#newsletter">NEWSLETTER</Nav.Link>
              <Nav.Link href="https://facebook.com"><i class="fab fa-facebook-f"></i></Nav.Link>
              <Nav.Link href="https://twitter.com"><i class="fab fa-twitter"></i></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  );
}

export default App;
