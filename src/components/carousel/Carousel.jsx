import React from "react";
import { Carousel } from "react-bootstrap";
import Action1 from "../../image/action1.png"
import "bootstrap/dist/css/bootstrap.min.css";

function CarouselMain() {
  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Carousel style={{ width: "100%" }}>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={Action1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>...</h3>
            <p>...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={Action1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>...</h3>
            <p>...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={Action1}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>...</h3>
            <p>...</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselMain;
