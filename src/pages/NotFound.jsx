import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Jumbotron fluid>
    <Container>
      <h1>404 - Not Found!</h1>
      <br/>
      <Link to="/">Go Home</Link>
    </Container>
  </Jumbotron>
);

export default NotFound;
