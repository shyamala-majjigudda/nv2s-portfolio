import React from "react";
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  createTheme,
  themes,
} from "@merc/react-timeline";
import Card from "react-bootstrap/Card";

//Css file
import "./product.css";

//Products
import product1 from "../../assets/img/products/product1.jpeg";
import product2 from "../../assets/img/products/product2.jpeg";
import product3 from "../../assets/img/products/product3.jpeg";
import product4 from "../../assets/img/products/product4.jpeg";
import product5 from "../../assets/img/products/product5.jpeg";
import product6 from "../../assets/img/products/product6.jpg";
import product7 from "../../assets/img/products/product7.jpg";

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
              <Card.Img src={product1} />
            </Card>
          </div>

          <div class="col-md-3 thumbnail">
            <Card>
              <Card.Img variant="center" src={product2} />
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
          <div class="col-md-3 thumbnail">
            <Card>
              <Card.Img variant="top" src={product7} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
