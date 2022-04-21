import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = props => {
  return (
    <div className="banner">
      <Carousel>
        {props.children}
      </Carousel>
    </div>
  );
};

export default Banner;
