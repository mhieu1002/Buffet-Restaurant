import React from "react";
import { Row, Col } from "react-bootstrap";

import content1 from "../assets/images/Vuvuzela/img_content1.jpg";
import content2 from "../assets/images/Vuvuzela/img_content2.jpg";

const textContent = [
  {
    title: "Vuvuzela Beer Club",
  },
];

const VuvuzelaContent = () => {
  return (
    <div>
      <Row>
        <Col xl={6}>
          {textContent.map((item, index) => (
            <div className="content" key={index}>
              <h3>{item.title}</h3>
              <p className="content__text">
                Vuvuzela là điểm đến đầy mê hoặc dành cho những người yêu thích
                bia tươi và đam mê khám phá những điều mới lạ.
              </p>
              <p className="content__text">
                Tại Vuvuzela thực khách có thể tìm thấy gần như bất kì loại bia
                tươi nào từ những loại quen thuộc như Tiger, Heineken,… cho đến
                Zamky – loại bia tươi Tiệp lần đầu tiên được biết đến hay rất
                nhiều những loại bia khác nhập khẩu từ Bỉ, Czech, Hà Lan..
              </p>
              <p className="content__text">
                Cùng với bia, món ăn đặc trưng của các quốc gia và PGs xinh đẹp
                là những điểm nhấn khiến Vuvuzela trở nên khác biệt.
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

export default VuvuzelaContent;
