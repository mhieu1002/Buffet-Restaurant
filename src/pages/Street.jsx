import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, CarouselItem } from "react-bootstrap";

import logo from "../assets/images/Street/street_logo.png";
import banner1 from "../assets/images/Street/img_banner1.jpg";
import banner2 from "../assets/images/Street/img_banner2.jpg";
import menu from "../assets/images/Street/menu_price.jpg";
import content1 from "../assets/images/Street/img_content3.jpg";
import content2 from "../assets/images/Street/img_content4.png";

import Helmet from "../components/Helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Application from "../components/Application";
import ScrollToTop from "../components/ScrollToTop";
import Banner from "../components/Banner";
import Recruit from "../components/Recruit";
import Restaurant from "../components/Restaurant";
import MobileList from "../components/MobileList";
import Content from "../contents/StreetContent";

const types = ["Hà Nội", "Hồ Chí Minh"];

const textContent = [
  {
    title1: "CƠM LÀNH CANH NGỌT - THƯỞNG TRỌN 32 MÓN VIỆT NGON XUẤT SẮC!",
    title2: "Món ăn 3 miền tại Phố ngon 37",
  },
];

const Street = () => {
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
    <Helmet title="Phố ngon 37">
      {/* Start header */}
      <header className={fix ? "header__fixed" : "header"}>
        <Container fluid className="height">
          <Row className="height">
            <Col lg={3}>
              <div className="header__logo">
                <Link to="/Street">
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

          {active === "Hồ Chí Minh" && (
            <div>
              <img src={menu} alt="MenuPrice" />
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
          <img src={content1} />
        </div>
        {textContent.map((item, index) => (
          <div className="content__two-text" key={index}>
            <h3>{item.title1}</h3>
            <p className="content__text">
              Mùa đông này, Phố Ngon 37 đặc biệt mang đến cho bạn menu cơm trưa
              32 món ngon xuất sắc!
            </p>
            <p className="content__text">
              Không thể cưỡng lại được sức hấp dẫn của một ngày se lạnh thưởng
              thức cơm nóng hổi với thịt kho tàu ngậy thơm đưa cơm, canh cá chua
              chua cay cay hay thịt rang cháy cạnh đậm vị cùng canh cua ngon
              ngây ngất.
            </p>
            <span>Đặt bàn ngay</span>
          </div>
        ))}
      </div>
      <div className="content__two">
        {textContent.map((item, index) => (
          <div className="content__two-text width50" key={index}>
            <h3>{item.title2}</h3>
            <p className="content__text">
              Với diện tích gần 1.000 m2 cùng sức chứa khoảng 500 chỗ, nhà hàng
              Phố ngon 37 sẽ là không gian để gặp gỡ bạn bè, đồng nghiệp và
              người thân.{" "}
            </p>
            <span>Chi tiết</span>
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

export default Street;
