import React from "react";
import { Row, Col } from "react-bootstrap";

import content1 from "../assets/images/Gogi/img_content1.jpg";
import content2 from "../assets/images/Gogi/img_content2.jpg";

const textContent = [
  {
    title: "GoGi Steak House – Korean BBQ Steak",
  },
];

const GogiContent = () => {
  return (
    <Row>
      <Col xl={6}>
        {textContent.map((item, index) => (
          <div className="content" key={index}>
            <h3>{item.title}</h3>
            <p className="content__text">
              Hiện đại – Phá cách – Hảo hạng, chính là những điểm đặc biệt mà
              GoGi Steak House mong muốn được mang đến cho khách hàng. GoGi
              Steak House là khái niệm chuẩn xác của mô hình Korean BBQ Steak
              duy nhất tại Việt Nam, kết hợp nét đặc trưng của giữa phong cách
              nướng than hoa Hàn Quốc cùng tinh thần Steak đậm chất Âu Mỹ.
            </p>
            <span>Xem thêm</span>
          </div>
        ))}
      </Col>

      <Col xl={6}>
        <div className="content__button">
          <div className="content__button-img">
            <img src={content2} />
          </div>
          <div className="content__button-img">
            <img src={content1} />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default GogiContent;
