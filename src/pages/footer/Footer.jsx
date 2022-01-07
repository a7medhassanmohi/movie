import React from "react";
import "./footer.scss";
import logo from "../../img/tmovie.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <img
        src={logo}
        alt=""
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
      <h2 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        BoxMovies
      </h2>
    </footer>
  );
}

export default Footer;
