import React from "react";
import { Row, Col } from "react-bootstrap";
import LandingC from "./LandingC";
import LandingF from "./LandingF";

const Landing = () => {
  return (
    <div>
      <Row>
        <Col>
          <LandingC />
        </Col>
        <Col>
          <LandingF />
        </Col>
      </Row>
    </div>
  );
};

export default Landing;
