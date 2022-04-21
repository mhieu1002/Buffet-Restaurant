import React from "react";

import Helmet from "../components/Helmet";
import Restaurant from "../components/Restaurant";
import MobileList from "../components/MobileList";

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div>
        <h1>Bạn muốn di chuyển tới...</h1>
      </div>
      <div className="home-content">
        <Restaurant className="setColor" />
        <MobileList />
      </div>
    </Helmet>
  );
};

export default Home;
