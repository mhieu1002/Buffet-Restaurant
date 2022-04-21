import React from "react";
import { Row, Col } from "react-bootstrap";

import content1 from "../assets/images/Cowboy/img_content1.jpg";
import content2 from "../assets/images/Cowboy/img_content2.jpg";

const textContent = [
  {
    title: "American Grilled & Pizza",
  },
];

const CowboyContent = () => {
  return (
    <div>
      <Row>
        <Col xl={6}>
          {textContent.map((item, index) => (
            <div className="content" key={index}>
              <h3>{item.title}</h3>
              <p className="content__text">
                Cowboy Jack’s – Authentic American Dining là chuỗi nhà hàng đậm
                chất Mỹ với phong cách hiện đại và gần gũi. Đến với Cowboy
                Jack’s, bạn không thể không thử qua các món ăn đặc biệt chỉ có
                thể tìm thấy tại đây như Chicago Pizza Nhân Nhồi với 8 hương vị
                đặc biêt, Sườn nướng Jumbo hay Bít tết bò Úc. Bạn là người thích
                khám phá sự thú vị của ẩm thực và văn hóa Mỹ? Cowboy Jack’s là
                sự lựa chọn tốt nhất dành cho bạn!
              </p>
              <span>Xem thực đơn</span>
            </div>
          ))}
        </Col>

        <Col xl={6}>
          <div className="content__button">
            <div className="content__button-img width50">
              <img src={content1} />
            </div>
            <div className="content__button-img width50">
              <img src={content2} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CowboyContent;
