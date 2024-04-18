import React from "react";
import { Col, Row } from "antd";
import { RightOutlined } from "@ant-design/icons"; // Import RightOutlined icon from Ant Design

const contentStyle = {
  margin: 0,
  height: "374px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const imageWrapperStyle = {
  borderRadius: "10px", // Border radius applied to the image wrapper
  overflow: "hidden", // Ensures content within the wrapper respects the border radius
};

const MyCarouselWithScrollButton = () => {
  return (
    <div style={{ position: "relative" }}>
      {/* Your existing MyCarousel component */}
      <MyCarousel />
      {/* Scroll button */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          padding: "8px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        <RightOutlined style={{ fontSize: "20px" }} />
      </div>
    </div>
  );
};

const MyCarousel = () => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <div style={imageWrapperStyle}>
          <img
            src="https://s3-alpha-sig.figma.com/img/c85c/1b22/8d8117877a16e1032232e452faf6f733?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kUDSltwslE~ShybI0CW8rF4KNWynYwYzv8JhlLODmX6nncfKkPSysxlhUM-JN804ZY1ppyS~-GpdpZehUqpQP8cMmp~aHqCN4VTMZRrgQ-5XNGm0urMG1t~GR~SwcZG7LI5ZRwZSDYyV4LznU2dbHiXRw5v4pnxgk9P9YTgG8MFCnkNADU5XPYGMWcPYEZbBa75OlnhjPEDUSS1nYUnupyOd~93NasC9yWLsyc40caeAgeV~ru6GcVTdFVaOmAOPZda9ViqpLUrimQMradul~qsCNqJzh4B6mXOUkMlpdd0iySi2GFwRY6nipCbgai0Y2m~DTYezydLQ~dCmiKGcUg__"
            alt="placeholder"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </Col>
      <Col span={12}>
        <div style={imageWrapperStyle}>
          <img
            src="https://s3-alpha-sig.figma.com/img/c85c/1b22/8d8117877a16e1032232e452faf6f733?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kUDSltwslE~ShybI0CW8rF4KNWynYwYzv8JhlLODmX6nncfKkPSysxlhUM-JN804ZY1ppyS~-GpdpZehUqpQP8cMmp~aHqCN4VTMZRrgQ-5XNGm0urMG1t~GR~SwcZG7LI5ZRwZSDYyV4LznU2dbHiXRw5v4pnxgk9P9YTgG8MFCnkNADU5XPYGMWcPYEZbBa75OlnhjPEDUSS1nYUnupyOd~93NasC9yWLsyc40caeAgeV~ru6GcVTdFVaOmAOPZda9ViqpLUrimQMradul~qsCNqJzh4B6mXOUkMlpdd0iySi2GFwRY6nipCbgai0Y2m~DTYezydLQ~dCmiKGcUg__"
            alt="placeholder"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </Col>
    </Row>
  );
};

export default MyCarouselWithScrollButton;

