import React from "react";
import { Row, Col } from "react-bootstrap";

import content1 from "../assets/images/Manwah/img_content1.jpg";
import content2 from "../assets/images/Manwah/img_content2.jpg";

const textContent = [
  {
    title: "Lẩu Đài Loan",
  },
];

const ManwahContent = () => {
  return (
    <Row>
      <Col xl={6}>
        {textContent.map((item, index) => (
          <div className="content" key={index}>
            <h3>{item.title}</h3>
            <p className="content__text">
              Sau hàng trăm năm tồn tại trong cuộc sống người Đài, lẩu Đài Loan
              không chỉ đơn thuần là sự kết hợp của các nguyên liệu quen thuộc,
              mà liên tục được cải tiến và hoàn thiện, từ thế hệ này sang thế hệ
              khác. Thực khách đến Manwah sẽ được tự mình khám phá hành trình ẩm
              thực đặc sắc với nước lẩu ngọt vị tự nhiên, kết hợp hầm cùng các
              loại gia vị dậy mùi thơm đặc trưng của Đài Loan. Nét đặc sắc không
              chỉ đến từ nước lẩu, mà còn đến từ cả những món nhúng kiểu Đài –
              bạn sẽ tìm thấy nhiều hơn là chỉ thịt bò và các loại rau thơm.
              Chính sự kết hợp các nguyên liệu, món ăn hài hoà sẽ tạo nên hương
              vị lẩu Đài Loan tỉ mỉ và tinh tế.
            </p>
            <span>Xem thực đơn</span>
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

export default ManwahContent;
