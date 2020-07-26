import React from "react";
import "./App.css";
import matches from "./assets/matches.png";
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

function App() {
  return (
    <Container fluid>
      <Row className="title">
        <Col>
          <div className="title-text">
            <Carousel.Caption>
              <h3>ISSUE 79</h3>
              <h1>Catalyst</h1>
              <h4>Agents of change</h4>
            </Carousel.Caption>
          </div>
          <Image className="matches" src={require("./assets/matches.png")} fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
