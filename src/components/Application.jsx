import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import app from "../assets/images/app.png";
import phone from "../assets/images/icon_phone.jpg";
import box from "../assets/images/icon_box.jpg";
import check from "../assets/images/icon_checkin.jpg";
import appStore from "../assets/images/logo_appstore.png";
import android from "../assets/images/logo_android.png";
import explore from "../assets/images/logo_explore.png";

const Application = () => {
  return (
    <div className="application">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="app__img">
              <img src={app} />
            </div>
          </Col>

          <Col lg={7}>
            <div className="app__store">
              <h3>The Golden Spoon - Siêu ứng dụng cho tín đồ ẩm thực</h3>
              <div>
                <img src={phone} />
                <span>Tích G-Coin lên đến 15%</span>
              </div>
              <div>
                <img src={box} />
                <span>Đổi ngàn quà hấp dẫn</span>
              </div>
              <div>
                <img src={check} />
                <span>Ưu đãi tại 300+ cửa hàng</span>
              </div>
              <div>
                <a>
                  <img src={appStore} />
                </a>
                <a>
                  <img src={android} />
                </a>
                <a>
                  <img src={explore} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Application;
