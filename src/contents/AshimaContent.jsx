import React from "react";
import { Row, Col } from "react-bootstrap";

import content1 from "../assets/images/Ashima/img_content1.jpg";
import content2 from "../assets/images/Ashima/img_content2.jpg";

const textContent = [
  {
    title: "ASHIMA MUSHROOM HOTPOT",
    slogan: " Lẩu nấm đặc sản ",
  },
];

const AshimaContent = () => {
  return (
    <Row>
      <Col xl={6}>
        {textContent.map((item, index) => (
          <div className="content" key={index}>
            <h3>{item.title}</h3>
            <p className="content__text">
              Chuỗi nhà hàng
              <b>{item.slogan}</b>
              mang phong cách vị á đông.
            </p>
            <p className="content__text">
              Ashima mang đến cho thực khách hương vị nấm tinh tuyển và những 
              trải nghiệm ẩm thực trọn vẹn nhất. Từng món trong thực đơn là thành
              quả của sự tuyển chọn với tiêu chí: Đặc sản, Thiên nhiên, Tốt cho 
              sức khỏe, Tươi ngon & Quý hiếm.
            </p>
            <span>Xem thêm</span>
          </div>
        ))}
      </Col>

      <Col xl={6}>
        <div className="content__button">
          <div className="content__button-img">
            <img src={content1} />
          </div>
          <div className="content__button-img">
            <img src={content2} />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default AshimaContent;
