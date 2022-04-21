import React from "react";
import { Row, Col } from "react-bootstrap";

import content1 from "../assets/images/Daruma/img_content1.png";
import content2 from "../assets/images/Daruma/img_content2.png";

const textContent = [
  {
    title: "QUÁN ĂN NHẬT BẢN",
  },
];

const DarumaContent = () => {
  return (
    <div>
      <Row>
        <Col xl={6}>
          {textContent.map((item, index) => (
            <div className="content" key={index}>
              <h3>{item.title}</h3>
              <p className="content__text">Daruma – Sushi, Sashimi & Hotpot</p>
              <p className="content__text">
                Daruma mang đến cho khách hàng những trải nghiệm ẩm thực Nhật
                Bản thân thiện, gần gũi với thực đơn gọi món và Buffet Lẩu mang
                đậm văn hóa của xứ sở hoa anh đào. Tại Daruma, bạn sẽ luôn được
                thưởng thức các món ăn chuẩn hương vị Nhật, từ các lựa chọn đa
                dạng các loại Buffet đến các món Sushi, Sashimi tươi ngon bổ
                dưỡng cho tới các set mỳ, cơm đa dạng.
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

export default DarumaContent;
