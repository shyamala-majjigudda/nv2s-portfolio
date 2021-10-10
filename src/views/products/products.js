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
import product5 from "../../assets/img/products/product5.jpeg";
import product6 from "../../assets/img/products/product6.jpg";

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
      <div className="d-flex justify-content-between flex-column mt-1">
        <div className="row">
          <div class="col-md-3 thumbnail">
            <Card>
              <Card.Img variant="top" src={product1} />
            </Card>
          </div>

          <div class="col-md-3 thumbnail">
            <Card>
              <Card.Img variant="top" src={product2} />
            </Card>
          </div>

          <div class="col-md-3 thumbnail">
            <Card>
              <Card.Img variant="top" src={product3} />
            </Card>
          </div>

          <div class="col-md-3 thumbnail">
            <Card>
              <Card.Img variant="top" src={product4} />
            </Card>
          </div>

          <div class="col-md-3 thumbnail">
            <Card>
              <Card.Img variant="top" src={product5} />
            </Card>
          </div>
          <div class="col-md-3 thumbnail">
            <Card>
              <Card.Img variant="top" src={product6} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
