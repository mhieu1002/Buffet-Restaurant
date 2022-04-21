import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, CarouselItem } from "react-bootstrap";

import logo from "../assets/images/Shogun/shogun_logo.png";
import banner1 from "../assets/images/Shogun/img_banner1.jpg";
import banner2 from "../assets/images/Shogun/img_banner2.jpg";
import banner3 from "../assets/images/Shogun/img_banner3.jpg";
import menu from "../assets/images/Shogun/menu_price.png";
import content1 from "../assets/images/Shogun/img_content3.jpg";
import content2 from "../assets/images/Shogun/img_content4.png";

import Helmet from "../components/Helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Application from "../components/Application";
import ScrollToTop from "../components/ScrollToTop";
import Banner from "../components/Banner";
import Recruit from "../components/Recruit";
import Restaurant from "../components/Restaurant";
import MobileList from "../components/MobileList";
import Content from "../contents/ShogunContent";

const textContent = [
  {
    title1: "NƯỚNG NHẬU CHUẨN NHẬT HẾT Ý TẠI SHOGUN LOTTE LIỄU GIAI",
    title2: "Danh sách nhà hàng đang hoạt động tại Hà Nội",
  },
];

const Shogun = () => {
  const [fix, setFix] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 95) {
        setFix(true);
      } else {
        setFix(false);
      }
    });
  }, []);

  return (
    <Helmet title="Shogun">
      {/* Start header */}
      <header className={fix ? "header__fixed" : "header"}>
        <Container fluid className="height">
          <Row className="height">
            <Col lg={3}>
              <div className="header__logo">
                <Link to="/Shogun">
                  <img
                    className={fix ? "img__fixed" : ""}
                    src={logo}
                    alt="Logo"
                  />
                </Link>
              </div>
            </Col>

            <Col lg={9} className="header__none">
              <Header />
            </Col>
          </Row>
        </Container>
      </header>
      {/* End header */}
      {/* Start banner */}
      <Banner>
        <CarouselItem>
          <img className="d-block w-100" src={banner1} />
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src={banner2} />
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src={banner3} />
        </CarouselItem>
      </Banner>
      {/* End banner */}
      {/* Start menu price */}
      <div className="menu__price margin">
        <div>
          <div className="menu__price-title">
            <span>Hà Nội</span>
          </div>

          <div>
            <img src={menu} alt="MenuPrice" />
          </div>
        </div>
      </div>
      {/* End menu price */}
      {/* Start content */}
      <div className="content__setting">
        <Container fluid>
          <Content />
        </Container>
      </div>
      <div className="content__two">
        <div className="content__two-img">
          <img src={content1} />
        </div>
        {textContent.map((item, index) => (
          <div className="content__two-text" key={index}>
            <h3>{item.title1}</h3>
            <p className="content__text">
              Tin vui dành cho 500 anh em, Shogun Lotte Liễu Giai đã mở cửa để
              phục vụ niềm đam mê nướng nhậu bất tận của các chiến hữu rồi đây!
            </p>
            <span>Xem thêm</span>
          </div>
        ))}
      </div>
      <div className="content__two">
        {textContent.map((item, index) => (
          <div className="content__two-text width50" key={index}>
            <h3>{item.title2}</h3>
            <p className="content__text">
              Shogun Lotte Liễu Giai – 024 7300 0656
            </p>
            <p className="content__text">
              Shogun Vincom Royal City – 024 7300 8016
            </p>
            <p className="content__text">
              Shogun Vincom Phạm Ngọc Thạch – 024 7300 7992
            </p>
            <span>Xem thêm</span>
          </div>
        ))}
        <div className="content__two-img width50">
          <img src={content2} />
        </div>
      </div>
      {/* End content */}
      {/* App */}
      <Application />
      {/* Recruit */}
      <Recruit />
      {/* Restaurant */}
      <Restaurant />
      {/*  */}
      <MobileList />
      {/*  */}
      {/* Footer */}
      <Footer />
      {/* Back to top */}
      <ScrollToTop />
    </Helmet>
  );
};

export default Shogun;
