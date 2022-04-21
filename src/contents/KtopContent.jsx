import React from "react";
import { Row, Col } from "react-bootstrap";

import content from "../assets/images/Ktop/img_content1.png";

const textContent = [
  {
    title: "Lẩu Hàn Quốc",
  },
];

const KtopContent = () => {
  return (
    <Row>
      <Col xl={6}>
        {textContent.map((item, index) => (
          <div className="content" key={index}>
            <h3>{item.title}</h3>
            <p className="content__text">
              KTOP KOREAN HOTPOT là chuỗi nhà hàng BUFFET LẨU HÀN QUỐC với các
              hương vị nước lẩu đặc trưng chuẩn Hàn, mang đến bạn trải nghiệm ẩm
              thực độc đáo của xứ sở kim chi. Với thiết kế kiến trúc trẻ trung
              hiện đại, lấy cảm hứng từ nhịp sống năng động của đất nước Hàn
              Quốc, KTOP là điểm hẹn lý tưởng cho những cuộc gặp gỡ ngập tràn
              niềm vui.
            </p>
            <span>Xem thực đơn</span>
          </div>
        ))}
      </Col>

      <Col xl={6}>
        <div className="content__button">
          <div className="content__button-img">
            <img src={content} />
          </div>
          <div className="content__button-img">
            <img src={content} />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default KtopContent;
