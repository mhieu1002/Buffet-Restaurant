import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, CarouselItem } from "react-bootstrap";

import logo from "../assets/images/Ktop/ktop_logo.png";
import banner1 from "../assets/images/Ktop/img_banner1.png";
import banner2 from "../assets/images/Ktop/img_banner2.png";
import banner3 from "../assets/images/Ktop/img_banner3.jpg";
import menuhn from "../assets/images/Ktop/menu_price_hn.png";
import menuhp from "../assets/images/Ktop/menu_price_hp.jpg";
import content from "../assets/images/Ktop/img_content2.png";

import Helmet from "../components/Helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Application from "../components/Application";
import ScrollToTop from "../components/ScrollToTop";
import Banner from "../components/Banner";
import Recruit from "../components/Recruit";
import Restaurant from "../components/Restaurant";
import MobileList from "../components/MobileList";
import Content from "../contents/KtopContent";

const types = ["Hà Nội", "Hải Phòng"];

const textContent = [
  {
    title: "Buffet Tokbokki 139,000VNĐ/người",
  },
];

const Ktop = () => {
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
    <Helmet title="Ktop">
      {/* Start header */}
      <header className={fix ? "header__fixed" : "header"}>
        <Container fluid className="height">
          <Row className="height">
            <Col lg={3}>
              <div className="header__logo">
                <Link to="/Ktop">
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
          {active === "Hải Phòng" && (
            <div>
              <img src={menuhp} alt="MenuPrice" />
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
        {textContent.map((item, index) => (
          <div className="content__two-text width50" key={index}>
            <h3>{item.title}</h3>
            <p className="content__text">
              Đến với KTOP, thực khách sẽ được trải nghiệm văn hóa ẩm thực độc
              đáo của xứ sở kim chi:
            </p>
            <p className="content__text">
              – Tự tay pha chế hương vị nước lẩu đặc trưng chuẩn Hàn
            </p>
            <p className="content__text">
              – Nhúng thỏa thích Bò Mỹ cao cấp, thịt heo mềm ngọt cùng 20+ loại
              Tokbokki & Topping
            </p>
            <p className="content__text">
              – Cuốn sạch viền cheese nóng hổi, béo ngậy
            </p>
            <p className="content__text">
              – Thưởng thức không giới hạn các món ăn kèm chuẩn Hàn Quốc: 30+
              món Gà chiên Hàn Quốc, gà sốt chua ngọt, miến trộn, cơm nắm…
            </p>
          </div>
        ))}
        <div className="content__two-img width50">
          <img src={content} />
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

export default Ktop;
