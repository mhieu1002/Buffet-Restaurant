import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, CarouselItem } from "react-bootstrap";

import logo from "../assets/images/Kpub/Kpub_logo.png";
import banner from "../assets/images/Kpub/img_banner1.jpg";
import menu from "../assets/images/Kpub/menu_price.png";

import Helmet from "../components/Helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Application from "../components/Application";
import ScrollToTop from "../components/ScrollToTop";
import Banner from "../components/Banner";
import Recruit from "../components/Recruit";
import Restaurant from "../components/Restaurant";
import MobileList from "../components/MobileList";
import Content from "../contents/KpubContent";

const Kpub = () => {
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
    <Helmet title="Kpub">
      {/* Start header */}
      <header className={fix ? "header__fixed" : "header"}>
        <Container fluid className="height">
          <Row className="height">
            <Col lg={3}>
              <div className="header__logo">
                <Link to="/Kpub">
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
          <img className="d-block w-100" src={banner} />
        </CarouselItem>
      </Banner>
      {/* End banner */}
      {/* Start menu price */}
      <div className="menu__price margin">
        <div>
          <div className="menu__price-title">
            <span>Thực đơn</span>
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

export default Kpub;
