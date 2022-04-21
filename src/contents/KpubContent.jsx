import React from "react";
import { Row, Col } from "react-bootstrap";

import content1 from "../assets/images/Kpub/img_content1.jpg";
import content2 from "../assets/images/Kpub/img_content2.jpg";

const textContent = [
  {
    title: "K-Pub: Nướng Đường phố Hàn Quốc",
    trademark: "Kpub ",
    price: " 199.000VNĐ/người ",
    slogan: " nướng đường phố Hàn Quốc ",
  },
];

const KpubContent = () => {
  return (
    <Row>
      <Col xl={6}>
        {textContent.map((item, index) => (
          <div className="content" key={index}>
            <h3>{item.title}</h3>
            <p>
              <b>{item.trademark}</b>
              không chỉ đặc biệt ở tên gọi mà còn bởi phong cách
              <b>{item.slogan}</b>
              và những món ngon độc đáo có 1-0-2. Cùng hòa mình vào không khí
              náo nhiệt tại K-Pub để thưởng thức thịt nướng đường phố Hàn đích
              thực chỉ từ
              <b>{item.price}</b>
              và thỏa thích chọn lựa tại Buffet line 30+ món: ba chỉ bò Mỹ,
              panchan, món Hàn nóng hổi, đồ tráng miệng, nước uống. Đặc biệt,
              viền trứng phô-mai refill không giới hạn được tặng kèm với mọi
              loại buffet sẽ mang đến những trải nghiệm hương vị cực kì mới lạ
              cho các tín đồ thịt nướng. Cùng tới khám phá K-Pub ngay thôi nào!!
            </p>
            <span>Xem Thực Đơn</span>
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

export default KpubContent;
