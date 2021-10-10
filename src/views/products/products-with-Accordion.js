import React from "react";
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  createTheme,
  themes,
} from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Css file
import "./product.css";

//Projects
import ChatKharaMeal from "../../assets/img/projects/ChatKharaMeal-Website.png";
import ExpenseTracker from "../../assets/img/projects/Expense-TrackerApp.png";
import MusicList from "../../assets/img/projects/Music-List-App.png";
import QuizApp from "../../assets/img/projects/QuizzApp-JavaScript.png";

//Products
import product1 from "../../assets/img/products/product1.jpeg";
import product2 from "../../assets/img/products/product2.jpeg";
import product3 from "../../assets/img/products/product3.jpeg";
import product4 from "../../assets/img/products/product4.jpeg";

//Skills
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_FIREBASE from "../../assets/img/skills/firebase-icon.svg";

// Custom timline theme
const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#efefef",
  },
  date: {
    backgroundColor: "#ec4b4f",
  },
  marker: {
    borderColor: "#070d59",
  },
  timelineTrack: {
    backgroundColor: "#ec4b4f",
  },
});

const Products = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PRODUCTS</h1>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={product1} rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src={product1} roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src={product1} thumbnail />
          </Col>
        </Row>
      </Container>

      {/* //ChatKharaMeal */}
      <div className="d-flex justify-content-between flex-column mt-1">
        <div>
          <Accordion>
            <Card>
              <Card.Img variant="top" src={product1} />
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                className="p-2 text-center accordian-main"
              >
                PROJECT DETAILS
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0" className="text-left">
                <Card.Body>
                  <strong>Description:</strong> This is an E-Commerce website of
                  savoury foods, which provides user online food shopping
                  experience with various varieties.
                  <hr />
                  <strong>Features:</strong>
                  <ul className="list-styles pt-1">
                    <li>Provide best quality of food in low price rate.</li>
                    <li>Powered by Pure JavaScript and CSS</li>
                    <li>Respoisive Design</li>
                  </ul>
                  <hr />
                  <strong>Tech used:</strong>
                  <ul>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_HTML5}
                          alt="HTML 5"
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        HTML5
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_CSS3}
                          alt="CSS 3"
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        CSS3
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_JAVASCRIPT}
                          alt="JavaScript"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        JavaScript
                      </span>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>

      {/* //ExpenseTracker */}
      <div className="d-flex justify-content-between flex-column mt-1">
        <div>
          <Accordion>
            <Card>
              <Card.Img variant="top" src={product2} />
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                className="p-2 text-center accordian-main"
              >
                PROJECT DETAILS
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0" className="text-left">
                <Card.Body>
                  <strong>Description:</strong> This is a Finance app to track
                  your daily expenses and keep to up to date. User friendly and
                  easy to use.
                  <hr />
                  <strong>Features:</strong>
                  <ul className="list-styles pt-1">
                    <li>Keep up to date you about your daily expenses</li>
                    <li>Powered by JavaScript, HTML and CSS.</li>
                    <li>Firebase firestore hosting and integration</li>
                  </ul>
                  <hr />
                  <strong>Tech used:</strong>
                  <ul>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_HTML5}
                          alt="HTML 5"
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        HTML5
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_CSS3}
                          alt="CSS 3"
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        CSS3
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_JAVASCRIPT}
                          alt="JavaScript"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        JavaScript
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_FIREBASE}
                          alt="Firebase"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        Firebase
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_BOOTSTRAP}
                          alt="bootstrap"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        Bootstrap
                      </span>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>

      {/* QuizApp */}
      <div className="d-flex justify-content-between flex-column mt-1">
        <div>
          <Accordion>
            <Card>
              <Card.Img variant="top" src={product3} />
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                className="p-2 text-center accordian-main"
              >
                PROJECT DETAILS
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0" className="text-left">
                <Card.Body>
                  <strong>Description:</strong> Basic Quiz app, to test your
                  computer knowledge. Also, The question and its options changed
                  in every page reload.
                  <hr />
                  <strong>Features:</strong>
                  <ul className="list-styles pt-1">
                    <li>Test your basic computer knowledge </li>
                    <li>API used for computer science quiz</li>
                    <li>Powered by JavaScript, HTML and CSS.</li>
                  </ul>
                  <hr />
                  <strong>Tech used:</strong>
                  <ul>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_HTML5}
                          alt="HTML 5"
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        HTML5
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_CSS3}
                          alt="CSS 3"
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        CSS3
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_JAVASCRIPT}
                          alt="JavaScript"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        JavaScript
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_BOOTSTRAP}
                          alt="bootstrap"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        Bootstrap
                      </span>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>

      {/* //MusicListApp */}
      <div className="d-flex justify-content-between flex-column mt-1">
        <div>
          <Accordion>
            <Card>
              <Card.Img variant="top" src={product4} />
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                className="p-2 text-center accordian-main"
              >
                PROJECT DETAILS
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0" className="text-left">
                <Card.Body>
                  <strong>Description:</strong> If you are a Music Lover!, then
                  its the best app for you to collect your music collection in
                  one place.
                  <hr />
                  <strong>Features:</strong>
                  <ul className="list-styles pt-1">
                    <li> JavaScript CRUD operation</li>
                    <li>Attractive UI, Easy to use.</li>
                    <li>Powered by JavaScript, HTML and CSS.</li>
                  </ul>
                  <hr />
                  <strong>Tech used:</strong>
                  <ul>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_HTML5}
                          alt="HTML 5"
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        HTML5
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_CSS3}
                          alt="CSS 3"
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        CSS3
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_JAVASCRIPT}
                          alt="JavaScript"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        JavaScript
                      </span>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Products;
