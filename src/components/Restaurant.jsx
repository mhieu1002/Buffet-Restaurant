import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import ashima from "../assets/images/Ashima/ashima_logo.png";
import kichi from "../assets/images/Kichi/kichi_logo.png";
import hutong from "../assets/images/Hutong/hutong_logo.png";
import manwah from "../assets/images/Manwah/manwah_logo.png";
import ktop from "../assets/images/Ktop/ktop_logo.png";
import sumo from "../assets/images/Sumo/sumo_logo.png";
import kpub from "../assets/images/Kpub/Kpub_logo.png";
import gogi from "../assets/images/Gogi/gogi_logo.png";
import isushi from "../assets/images/Isushi/isushi_logo.png";
import daruma from "../assets/images/Daruma/daruma_logo.png";
import shogun from "../assets/images/Shogun/shogun_logo.png";
import vuvuzela from "../assets/images/Vuvuzela/vuvuzela_logo.png";
import cowboy from "../assets/images/Cowboy/cowboy_logo.png";
import street from "../assets/images/Street/street_logo.png";
import crystal from "../assets/images/Crystal/crystal_logo.png";

const Restaurant = () => {
  return (
    <div className="restaurant">
      <Container fluid>
        <Row>
          <Col lg={2}>
            <div className="restaurant__text">
              <h3>
                hotpot
                <span>concept</span>
              </h3>
            </div>
          </Col>
          <Col lg={10}>
            <div className="restaurant__logo">
              <ul>
                <li>
                  <Link to="/Ashima">
                    <img src={ashima} />
                  </Link>
                </li>

                <li>
                  <Link to="/Kichi">
                    <img src={kichi} />
                  </Link>
                </li>
                <li>
                  <Link to="/Hutong">
                    <img src={hutong} />
                  </Link>
                </li>
                <li className="restaurant__logo-icon">
                  <Link to="/Manwah">
                    <img src={manwah} />
                  </Link>
                </li>
                <li className="restaurant__logo-icon">
                  <Link to="/Ktop">
                    <img src={ktop} />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={2}>
            <div className="restaurant__text">
              <h3>
                bbq
                <span>concept</span>
              </h3>
            </div>
          </Col>
          <Col lg={10}>
            <div className="restaurant__logo">
              <ul>
                <li>
                  <Link to="/Sumo">
                    <img className="sumo" src={sumo} />
                  </Link>
                </li>
                <li>
                  <Link to="/Kpub">
                    <img src={kpub} />
                  </Link>
                </li>
                <li>
                  <Link to="/Gogi">
                    <img src={gogi} />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={2}>
            <div className="restaurant__text">
              <h3>
                japanese
                <span>concept</span>
              </h3>
            </div>
          </Col>
          <Col lg={10}>
            <div className="restaurant__logo">
              <ul>
                <li>
                  <Link to="/Isushi">
                    <img src={isushi} />
                  </Link>
                </li>
                <li>
                  <Link to="/Daruma">
                    <img src={daruma} />
                  </Link>
                </li>
                <li>
                  <Link to="/Shogun">
                    <img src={shogun} />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={2}>
            <div className="restaurant__text">
              <h3>
                beer
                <span>concept</span>
              </h3>
            </div>
          </Col>
          <Col lg={10}>
            <div className="restaurant__logo">
              <ul>
                <li>
                  <Link to="/Vuvuzela">
                    <img src={vuvuzela} />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={2}>
            <div className="restaurant__text">
              <h3>
                western
                <span>concept</span>
              </h3>
            </div>
          </Col>
          <Col lg={10}>
            <div className="restaurant__logo">
              <ul>
                <li>
                  <Link to="/Cowboy">
                    <img src={cowboy} />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={2}>
            <div className="restaurant__text">
              <h3>
                other
                <span>concept</span>
              </h3>
            </div>
          </Col>
          <Col lg={10}>
            <div className="restaurant__logo">
              <ul>
                <li>
                  <Link to="/Street">
                    <img src={street} />
                  </Link>
                </li>
                <li>
                  <Link to="/Crystal">
                    <img src={crystal} />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Restaurant;
