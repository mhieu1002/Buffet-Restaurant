import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import fb from "../assets/images/fb_logo.png";
import ins from "../assets/images/ins_logo.png";

const GoldenGateFooter = [
  {
    display: "Sứ mệnh",
    path: "/",
  },
  {
    display: "Quan hệ Cổ đông",
    path: "/",
  },
  {
    display: "Công bố Chất lượng sản phẩm",
    path: "/",
  },
  {
    display: "Quy trình khiếu nại",
    path: "/",
  },
  {
    display: "Chính sách bảo mật thông tin",
    path: "/",
  },
];

const GoldenSpoonFooter = [
  {
    display: "Hiện đã có trên AppStore và CHPlay",
    path: "/",
  },
];

const recruitFooter = [
  {
    display: "Hotline: 19006622",
    path: "/",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__start"></div>
      <div className="footer__register">
        <Container fluid className="height">
          <Row className="height">
            <Col lg={3} className="height">
              <div className="footer__register-social">
                <a>
                  <img src={fb} alt="fb" />
                </a>
                <a>
                  <img className="ins__logo" src={ins} alt="ins" />
                </a>
              </div>
            </Col>

            <Col lg={9}>
              <div className="footer__register-input">
                <span>Đăng ký để nhận ưu đãi hàng tháng</span>
                <input type="email" placeholder="Địa chỉ email" />
                <button>
                  <span>Đăng ký</span>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer__main">
        <Container className="height">
          <Row className="height">
            <Col lg={2}>
              <div className="footer__main-items">
                <div className="footer__main-items-title">về golden gate</div>
                <div className="footer__main-items-content">
                  {GoldenGateFooter.map((item, index) => (
                    <p key={index}>
                      <Link className="footer__main-items-content-text" to={item.path}>{item.display}</Link>
                    </p>
                  ))}
                </div>
              </div>
            </Col>

            <Col lg={2}>
              <div className="footer__main-items">
                <div className="footer__main-items-title">the golden spoon</div>
                <div className="footer__main-items-content">
                  {GoldenSpoonFooter.map((item, index) => (
                    <p key={index}>
                      <Link className="footer__main-items-content-text" to={item.path}>{item.display}</Link>
                    </p>
                  ))}
                </div>
              </div>
            </Col>

            <Col lg={2}>
              <div className="footer__main-items">
                <div className="footer__main-items-title">văn hóa</div>
              </div>
            </Col>

            <Col lg={2}>
              <div className="footer__main-items">
                <div className="footer__main-items-title">tin tức</div>
              </div>
            </Col>

            <Col lg={2}>
              <div className="footer__main-items">
                <div className="footer__main-items-title">tuyển dụng</div>
                <div className="footer__main-items-content">
                  {recruitFooter.map((item, index) => (
                    <p key={index}>
                      <Link className="footer__main-items-content-text" to={item.path}>{item.display}</Link>
                    </p>
                  ))}
                </div>
              </div>
            </Col>

            <Col lg={2}>
              <div className="footer__main-items">
                <div className="footer__main-items-title">liên hệ</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer__end"></div>
    </footer>
  );
};

export default Footer;
