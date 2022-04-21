import React from "react";
import { Row, Col } from "react-bootstrap";

import content1 from "../assets/images/Shogun/img_content1.png";
import content2 from "../assets/images/Shogun/img_content2.png";

const textContent = [
  {
    title: "Buffet 68+ món ngon tinh hoa Nhật Bản",
  },
];

const ShogunContent = () => {
  return (
    <div>
      <Row>
        <Col xl={6}>
          {textContent.map((item, index) => (
            <div className="content" key={index}>
              <h3>{item.title}</h3>
              <p className="content__text">
                Shogun là thương hiệu Buffet Nướng nhậu chuẩn Nhật, nổi tiếng
                với mô hình nướng phong cách đường phố Izakaya. Được thành lập
                từ năm 2015, đến nay Shogun đã mở rộng 5 chi nhánh trên 3 thành
                phố lớn: Hà Nội, Bắc Ninh và Vinh. Shogun tự hào là một trong số
                ít nhà hàng nướng nhậu tại Việt Nam có phong cách Izakaya độc
                đáo và menu đa dạng từ nướng nhậu, món ăn kèm cho đến sashimi,
                lẩu và tráng miệng. Menu Buffet lên đến 100+ món ăn tinh hoa
                Nhật Bản với hơn 10 loại thịt nướng hảo hạng cùng sốt ướp đặc
                biệt hấp dẫn chắc chắn sẽ mang lại cho thực khách trải nghiệm
                trọn vẹn hương vị ẩm thực từ đất nước mặt trời mọc.
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

export default ShogunContent;
