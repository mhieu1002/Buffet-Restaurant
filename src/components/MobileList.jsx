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

const MobileList = () => {
  return (
    <div className="mobile__list">
      <Container fluid>
        <Row className="mobile__list-set">
          <Col xxs={3}>
            <div className="mobile__list-icon">
              <Link to="/Gogi">
                <img src={gogi} />
              </Link>
            </div>
          </Col>
          <Col xxs={3}>
            <div className="mobile__list-icon">
              <Link to="/Kichi">
                <img src={kichi} />
              </Link>
            </div>
          </Col>
          <Col xxs={3}>
            <div className="mobile__list-icon">
              <Link to="/Daruma">
                <img src={daruma} />
              </Link>
            </div>
          </Col>
          <Col xxs={3}>
            <div className="mobile__list-icon">
              <Link to="/Manwah">
                <img src={manwah} />
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="mobile__list-set">
          <Col xxs={3}>
            <div className="mobile__list-icon">
              <Link to="/Ktop">
                <img src={ktop} />
              </Link>
            </div>
          </Col>
          <Col xxs={3}>
            <div className="mobile__list-icon">
              <Link to="/Kpub">
                <img src={kpub} />
              </Link>
            </div>
          </Col>
          <Col xxs={3}>
            <div className="mobile__list-icon">
              <Link to="/Street">
                <img src={street} />
              </Link>
            </div>
          </Col>
          <Col xxs={3}>
            <div className="mobile__list-icon">
              <Link to="/Ashima">
                <img src={ashima} />
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="mobile__list-set">
          <Col xxs={3}>
            <div className="mobile__list-icon">
              <Link to="/Cowboy">
                <img src={cowboy} />
              </Link>
            </div>
          </Col>
          <Col xxs={3}>
            <div className="mobile__list-icon">
              <Link to="/Hutong">
                <img src={hutong} />
              </Link>
            </div>
          </Col>
          <Col xxs={3}>
            <div className="mobile__list-icon">
              <Link to="/Shogun">
                <img src={shogun} />
              </Link>
            </div>
          </Col>
          <Col xxs={3}>
            <div className="mobile__list-icon">
              <Link to="/Vuvuzela">
                <img src={vuvuzela} />
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="mobile__list-set">
          <Col xxs={3}>
            <div className="mobile__list-icon">
              <Link to="/Isushi">
                <img src={isushi} />
              </Link>
            </div>
          </Col>
          <Col xxs={3}>
            <div className="mobile__list-icon">
              <Link to="/Crystal">
                <img src={crystal} />
              </Link>
            </div>
          </Col>
          <Col xxs={3}>
            <div className="mobile__list-icon">
              <Link to="/Sumo">
                <img className="icon__sumo-set" src={sumo} />
              </Link>
            </div>
          </Col>
          <Col xxs={3}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default MobileList;
