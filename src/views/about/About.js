import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/profile.svg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-2">ABOUT US</h1>
        <Container>
          <Row className=" align-items-start p-2 my-details rounded tex align-text-left ">
            <Col>
              NV2S technology provides end to end solution of enclosure design
              and fabrication services.
              <br />
              Eletrical Wire Harness manufacture.
              <ul>
                <li>Automotive</li>
                <li>Aerospace</li>
                <li>Defence</li>
                <li>Medical</li>
              </ul>
            </Col>
          </Row>
          <Row className=" align-items-start p-3 my-details rounded tex align-text-left ">
            <Col>
              <h2>VISION & MISSION</h2>
              <ul>
                <li>To become gobally prefered interconnection solution provider by
              adding value in each of the solution.</li>
                <li> We provide and create stake holder delight.</li>
                <li>Pioneer in cable harness assemblies for exacting application.</li>
              </ul>             
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
