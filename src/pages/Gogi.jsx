import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, CarouselItem } from "react-bootstrap";

import logo from "../assets/images/Gogi/gogi_logo.png";
import banner1 from "../assets/images/Gogi/img_banner1.jpg";
import banner2 from "../assets/images/Gogi/img_banner2.jpg";
import banner3 from "../assets/images/Gogi/img_banner3.jpg";
import menu from "../assets/images/Gogi/menu_price.jpg";
import content1 from "../assets/images/Gogi/img_content3.jpg";
import content2 from "../assets/images/Gogi/img_content4.jpg";

import Helmet from "../components/Helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Application from "../components/Application";
import ScrollToTop from "../components/ScrollToTop";
import Banner from "../components/Banner";
import Recruit from "../components/Recruit";
import Restaurant from "../components/Restaurant";
import MobileList from "../components/MobileList";
import Content from "../contents/GogiContent";

const textContent = [
  {
    title1: "Thưởng thức Steak và rượu vang theo phong cách Korean BBQ",
    title2: "Không gian trải nghiệm ẩm thực thăng hoa",
  },
];

const Gogi = () => {
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
    <Helmet title="GoGi Steak House">
      {/* Start header */}
      <header className={fix ? "header__fixed" : "header"}>
        <Container fluid className="height">
          <Row className="height">
            <Col lg={3}>
              <div className="header__logo">
                <Link to="/">
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
        {textContent.map((item, index) => (
          <div className="content__two-text width50" key={index}>
            <h3>{item.title1}</h3>
            <p className="content__text">
              Từng loại thịt đặc biệt tuyển chọn đạt chuẩn USDA Prime được sử
              dụng tại GoGi Steak House như Black Angus, Wagyu – loại thịt
              thượng hạng với độ ngon trứ danh, được nướng trực tiếp trên bếp
              than hoa theo chuẩn Hàn Quốc với độ chín theo yêu cầu riêng ngay
              tại bàn, nhâm nhi một chút rượu.
            </p>
            <span>Chi tiết</span>
          </div>
        ))}
        <div className="content__two-img width50">
          <img src={content1} />
        </div>
      </div>
      <div className="content__two">
        {textContent.map((item, index) => (
          <div className="content__two-text width50" key={index}>
            <h3>{item.title2}</h3>
            <p className="content__text">
              GoGi Steak House luôn tâm niệm rằng trải nghiệm ẩm thực trọn vẹn
              của thực khách nằm ở hương vị món ăn ngon và phong cách phục vụ
              tận tâm, cho tới việc chăm chút đầu tư vào từng góc không gian tại
              nhà hàng đó sẽ là một “hành trình” tuyệt vời được cảm nhận bằng đủ
              các giác quan.
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

export default Gogi;
