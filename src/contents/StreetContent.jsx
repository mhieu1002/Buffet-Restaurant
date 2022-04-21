import React from "react";
import { Row, Col } from "react-bootstrap";

import content1 from "../assets/images/Street/img_content1.jpg";
import content2 from "../assets/images/Street/img_content2.jpg";

const textContent = [
  {
    title: "Món Ngon Đường phố",
  },
];

const StreetContent = () => {
  return (
    <div>
      <Row>
        <Col xl={6}>
          {textContent.map((item, index) => (
            <div className="content" key={index}>
              <h3>{item.title}</h3>
              <p className="content__text">
                Phố ngon 37 là nơi tụ hội của hơn 300 món ngon từ khắp miền tổ
                quốc. Những đầu bếp của phố ngon luôn hy vọng có thể mang đến
                cho khách thưởng thức hương vị nguyên bản nhất của ẩm thực dân
                dã Việt Nam
              </p>
              <span>Xem thêm</span>
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

export default StreetContent;
