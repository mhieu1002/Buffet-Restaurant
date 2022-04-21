import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import recruit from "../assets/images/apply.png";

const Recruit = () => {
  return (
    <div className="recruit">
      <Container>
        <Row>
          <Col md={5}>
            <div className="apply__img">
              <img src={recruit} />
            </div>
          </Col>

          <Col md={7}>
            <div className="apply__content">
              <h2>"đừng tìm việc</h2>
              <h2>hãy tìm sự nghiệp"</h2>
              <h3>hàng trăm công việc hấp dẫn đang chờ bạn</h3> 
              <button>ứng tuyển</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Recruit;
