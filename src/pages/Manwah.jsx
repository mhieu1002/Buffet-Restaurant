import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, CarouselItem } from "react-bootstrap";

import logo from "../assets/images/Manwah/manwah_logo.png";
import banner1 from "../assets/images/Manwah/img_banner1.jpg";
import banner2 from "../assets/images/Manwah/img_banner2.jpg";
import banner3 from "../assets/images/Manwah/img_banner3.jpg";
import menuhn from "../assets/images/Manwah/menu_price_hn.png";
import menuhcm from "../assets/images/Manwah/menu_price_hcm.jpg";
import content1 from "../assets/images/Manwah/img_content3.jpg";
import content2 from "../assets/images/Manwah/img_content4.jpg";

import Helmet from "../components/Helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Application from "../components/Application";
import ScrollToTop from "../components/ScrollToTop";
import Banner from "../components/Banner";
import Recruit from "../components/Recruit";
import Restaurant from "../components/Restaurant";
import MobileList from "../components/MobileList";
import Content from "../contents/ManwahContent";

const types = ["Hà Nội", "Hồ Chí Minh"];

const textContent = [
  {
    title1: "Manwah Giảng Võ chính thức mở cửa đón gia đình bạn tới thưởng lẩu sum vầy!",
    title2: "Đến Manwah thưởng lẩu sum vầy – Trọn vẹn yêu thương bên gia đình"
  },
];

const Manwah = () => {
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
    <Helmet title="Manwah">
      {/* Start header */}
      <header className={fix ? "header__fixed" : "header"}>
        <Container fluid className="height">
          <Row className="height">
            <Col lg={3}>
              <div className="header__logo">
                <Link to="/Manwah">
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
      <div className="content__two white">
        <div className="content__two-img">
          <img src={content1} />
        </div>
        {textContent.map((item, index) => (
          <div className="content__two-text" key={index}>
            <h3 className="black">{item.title1}</h3>
            <p className="content__text black">
              Khác với những nhà Manwah trước có không gian đậm chất Đài truyền
              thống với chất liệu chủ đạo là gỗ, thì Manwah Giảng Võ đưa chất
              liệu kim loại xuất hiện trong nội thất nhiều hơn, tiết chế trạm
              chổ, hơi hướm cảnh quan đô thị được hiển hiện rất rõ nét…tất cả đã
              mang tới cho Manwah Giảng Võ một hơi thở hiện đại của Đài Loan.
            </p>
            <span className="black">Xem thêm</span>
          </div>
        ))}
      </div>
      <div className="content__two white">
        <div className="content__two-img">
          <img src={content2} />
        </div>
        {textContent.map((item, index) => (
          <div className="content__two-text" key={index}>
            <h3 className="black">{item.title2}</h3>
            <p className="content__text black">“Gia đình, đâu đơn giản chỉ là cùng hộ khẩu</p>
            <p className="content__text black">Chẳng nhất thiết phải chung nhau cái họ</p>
            <p className="content__text black">Chỉ cần đủ yêu thương là trọn vẹn sum vầy.”</p>
            <span className="black">Xem thêm</span>
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

export default Manwah;
