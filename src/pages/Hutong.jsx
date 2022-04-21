import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, CarouselItem } from "react-bootstrap";

import logo from "../assets/images/Hutong/hutong_logo.png";
import banner1 from "../assets/images/Hutong/img_banner1.jpg";
import banner2 from "../assets/images/Hutong/img_banner2.jpg";
import menuhn from "../assets/images/Hutong/menu_price_hn.jpg";
import menuhcm from "../assets/images/Hutong/menu_price_hcm.png";
import content from "../assets/images/Hutong/img_content3.jpg";

import Helmet from "../components/Helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Application from "../components/Application";
import ScrollToTop from "../components/ScrollToTop";
import Banner from "../components/Banner";
import Recruit from "../components/Recruit";
import Restaurant from "../components/Restaurant";
import MobileList from "../components/MobileList";
import Content from "../contents/HutongContent";

const types = ["Hà Nội", "Hồ Chí Minh"];

const textContent = [
  {
    title: "Lẩu Hồng Kông",
  },
];

const Hutong = () => {
  const [fix, setFix] = useState(false);
  const [active, setActive] = useState("Hà Nội");

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
    <Helmet title="Hutong">
      {/* Start header */}
      <header className={fix ? "header__fixed" : "header"}>
        <Container fluid className="height">
          <Row className="height">
            <Col lg={3}>
              <div className="header__logo">
                <Link to="/Hutong">
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
      </Banner>
      {/* End banner */}
      {/* Start menu price */}
      <div className="menu__price margin">
        <div>
          <div className="menu__price-title">
            {types.map((item) => (
              <span
                className={active === item ? null : "menu__price-title-place"}
                key={item}
                onClick={() => setActive(item)}
              >
                {item}
              </span>
            ))}
          </div>

          {active === "Hà Nội" && (
            <div>
              <img src={menuhn} alt="MenuPrice" />
            </div>
          )}
          {active === "Hồ Chí Minh" && (
            <div>
              <img src={menuhcm} alt="MenuPrice" />
            </div>
          )}
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
            <img src={content} />
          </div>
          {textContent.map((item, index) => (
            <div className="content__two-text" key={index}>
              <h3>{item.title}</h3>
              <p className="content__text">
              Lẩu cay Sichuan được sinh ra với hương vị không nhằm chiều lòng tất cả 
              các tín đồ ăn uống bởi vị cay thực sự “tới nơi tới chốn của nó”. Nhưng 
              đối với những ai đã say cảm giác cay tê nơi đầu lưỡi và hậu vị đậm ngọt, 
              thì Sichuan là một lựa chọn không thể bỏ qua.
              </p>
              <span>Xem thêm</span>
            </div>
          ))}
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

export default Hutong;
