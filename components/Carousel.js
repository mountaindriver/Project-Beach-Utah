import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div className="carousel">
        <Carousel>
          <div>
            <img src="images/Heidi project beach.webp" alt="Heidi" />
            <p className="legend">Image 1</p>
          </div>
          <div>
            <img src="images\M1 project beach.webp" alt="Male 1" />
            <p className="legend">Image 2</p>
          </div>
        </Carousel>
      </div>
    );
  }
}
