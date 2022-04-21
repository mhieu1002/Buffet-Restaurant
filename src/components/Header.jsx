import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const mainNav = [
  {
    display: "Thực đơn",
    path: "/",
  },
  {
    display: "Ưu đãi",
    path: "/",
  },
  {
    display: "Đặt bàn",
    path: "/",
  },
  {
    display: "The golden spoon",
    path: "/",
  },
  {
    display: "Blog",
    path: "/",
  },
  {
    display: "Tuyển dụng",
    path: "/",
  },
  {
    display: "Liên hệ",
    path: "/",
  },
];

const Header = () => {
  return (
    <div className="header__nav">
      {mainNav.map((item, index) => (
        <div key={index}>
          <Link to={item.path}>
            <span>{item.display}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Header;
