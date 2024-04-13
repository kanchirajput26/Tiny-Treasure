
import React from "react";
import { Carousel, Grid } from "antd";
import { Col, Row } from "antd";

const contentStyle = {
  margin: 0,
  height: "374px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const MyCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Carousel autoplay afterChange={onChange}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </Col>
      <Col span={12}>
        <Carousel autoplay afterChange={onChange}>
          <div>
            <h3 style={contentStyle}>A</h3>
          </div>
          <div>
            <h3 style={contentStyle}>B</h3>
          </div>
          <div>
            <h3 style={contentStyle}>C</h3>
          </div>
          <div>
            <h3 style={contentStyle}>D</h3>
          </div>
        </Carousel>
      </Col>
    </Row>
  );
};

export default MyCarousel;




