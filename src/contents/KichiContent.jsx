import React from "react";
import { Row, Col } from "react-bootstrap";

import content from "../assets/images/Kichi/img_content.png";

const textContent = [
  {
    title: "Lẩu Băng chuyền",
  },
];

const KichiContent = () => {
  return (
    <Row>
      <Col xl={6}>
        {textContent.map((item, index) => (
          <div className="content" key={index}>
            <h3>{item.title}</h3>
            <p>
              Kichi-Kichi là chuỗi nhà hàng chuyên về Buffet lẩu hàng đầu
              Việt Nam. Các món ăn ngon và đa dạng được phục vụ với hình thức
              băng chuyền độc đáo, hiện đại, vốn là sự kết hợp của phong cách 
              phục vụ Kaiten đến từ Nhật Bản với kiến trúc hiện đại. Chỉ với 
              một giá cố định, khách hàng được thưởng thức không hạn chế gần 
              100 sản phẩm nhúng lẩu đặc sắc như bò Mỹ nhập khẩu, cá hồi nguyên 
              con, rau sạch, nấm tươi theo mùa,... 
            </p>
            <span>Xem Thực Đơn</span>
          </div>
        ))}
      </Col>

      <Col xl={6}>
        <div className="content__button">
          <div className="content__button-img">
            <img src={content} />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default KichiContent;
