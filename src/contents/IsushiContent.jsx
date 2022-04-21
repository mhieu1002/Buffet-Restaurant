import React from "react";
import { Row, Col } from "react-bootstrap";

import content1 from "../assets/images/Isushi/img_content1.png";
import content2 from "../assets/images/Isushi/img_content2.png";

const textContent = [
  {
    title: "Buffet Nhật Bản 100 món tinh hoa",
  },
];

const IsushiContent = () => {
  return (
    <div>
      <Row>
        <Col xl={6}>
          {textContent.map((item, index) => (
            <div className="content" key={index}>
              <h3>{item.title}</h3>
              <p className="content__text">
                Với 1500 con cá hồi được tiêu thụ mỗi tháng, iSushi tự hào là
                nhà hàng Nhật Bản có thể đáp ứng nhu cầu thưởng thức cá hồi lớn
                nhất cả nước.
              </p>
              <p className="content__text">
                iSushi mang tới cho khách hàng những trải nghiệm và cảm xúc Nhật
                thực thụ cùng Menu Buffet 100+ món Nhật tinh hoa với hơn 30 món
                làm từ cá hồi; các món Sashimi tươi ngon, hơn 57 loại Sushi cùng
                nhiều món nóng hấp dẫn khác như Teppanyaki, Yakitori… do Tổng
                bếp trưởng Noda Toshiro thực hiện.
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

export default IsushiContent;
