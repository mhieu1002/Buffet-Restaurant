import React from "react";
import { Row, Col } from "react-bootstrap";

import content1 from "../assets/images/Hutong/img_content1.jpg";
import content2 from "../assets/images/Hutong/img_content2.jpg";

const textContent = [
  {
    title: "Lẩu Hồng Kông",
  },
];

const HutongContent = () => {
  return (
    <div>
      <Row>
        <Col xl={6}>
          {textContent.map((item, index) => (
            <div className="content" key={index}>
              <h3>{item.title}</h3>
              <p className="content__text">
                Văn hóa ẩm thực Hong Kong là sự pha trộn thú vị giữa hương vị
                truyền thống và đương đại tạo nên một trải nghiệm ẩm thực sống
                động. Lẩu Hong Kong tinh hoa là minh chứng cho sự kén chọn và
                cầu kì trong nền ẩm thực xứ Cảng Thơm - "Thiên đường ẩm thực
                dành cho người sành ăn".
              </p>
              <p className="content__text">
                Đội ngũ HUTONG luôn không ngừng sáng tạo và thử nghiệm để mang
                đến bạn những trải nghiệm “không-giống-lần-trước”, để mỗi bữa
                tiệc lẩu của bạn là trọn vẹn và duy nhất.
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

export default HutongContent;
