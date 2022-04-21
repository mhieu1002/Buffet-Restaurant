import React from "react";
import { Row, Col } from "react-bootstrap";

import content1 from "../assets/images/Crystal/img_content1.jpg";
import content2 from "../assets/images/Crystal/img_content2.jpg";

const textContent = [
  {
    title: "Nhà hàng ẩm thực Hồng Kông danh tiếng Châu Á",
  },
];

const CrystalContent = () => {
  return (
    <div>
      <Row>
        <Col xl={6}>
          {textContent.map((item, index) => (
            <div className="content" key={index}>
              <h3>{item.title}</h3>
              <p className="content__text">
                Crystal Jade thương hiệu toàn cầu, với 30 năm hoạt động, 120 nhà
                hàng tọa lạc tại 25 thành phố thuộc 11 quốc gia khác nhau,
                Crystal Jade có lẽ đã là cái tên quen thuộc với giới mộ điệu ẩm
                thực bởi sự tận tâm trong phục vụ và những tiêu chuẩn khắt khe.
              </p>
              <p className="content__text">
                Tự hào khi là một phần của tập đoàn ẩm thực Crystal Jade,
                Crystal Jade Hong Kong Kitchen tiếp tục kế thừa danh tiếng lẫn
                những công thức bí truyền từ thương hiệu đạt chứng nhận Michelin
                danh giá. Với hơn 100 món ăn Hồng Kông đích thực, từng câu
                chuyện trong bữa ăn của bạn càng thêm thú vị bởi không gian hiện
                đại cùng phong cách ẩm thực chuẩn quốc tế khi đến với Crystal
                Jade Hong Kong Kitchen.
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

export default CrystalContent;
