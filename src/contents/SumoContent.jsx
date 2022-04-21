import React from "react";
import { Row, Col } from "react-bootstrap";

import content1 from "../assets/images/Sumo/img_content1.png";
import content2 from "../assets/images/Sumo/img_content2.png";

const textContent = [
  {
    title: "SUMO YAKINIKU",
  },
];

const SumoContent = () => {
  return (
    <Row>
      <Col xl={6}>
        {textContent.map((item, index) => (
          <div className="content" key={index}>
            <h3>{item.title}</h3>
            <p className="content__text">
              Gắn liền với tên gọi của nghệ thuật nướng nổi tiếng Nhật Bản, Sumo
              Yakiniku là nhà hàng thịt nướng chú trọng đến nguyên liệu thượng
              hạng hay quá trình chuẩn bị tinh tế công phu từ bảo quản, chế biến
              thịt, sốt ướp, sốt chấm và kỹ thuật nướng.
            </p>
            <p className="content__text">
              Với Menu gọi món của Sumo, thực khách sẽ được thưởng thức trọn vẹn
              mỹ vị Nhật bản: từ các loại thịt cao cấp với bò Wagyu, Harami,
              thăn ngoại bò Mỹ, heo Iberico cho tới các loại lẩu và món ăn kèm
              đặc sắc. Bên cạnh đó, Sumo Yakiniku còn phục vụ menu Buffet dành
              cho khách hàng muốn tận hưởng thoả thích thịt nướng Nhật Bản hay
              Course/Combo dành cho nhóm 2-3 thực khách.
            </p>
            <span>Xem thêm thực đơn</span>
          </div>
        ))}
      </Col>

      <Col xl={6}>
        <div className="content__button">
          <div className="content__button-img">
            <img src={content2} />
          </div>
          <div className="content__button-img">
            <img src={content2} />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SumoContent;
