import React from "react";
import Logo from "../img/Logo.png";
import "../scss/vass.scss";
import "../css/styles.css";
const Nav = () => {
  return (
    <header class="encabezado">
      <div class="container">
        <a href="https://vasscompany.com/" target="_blank" rel="noreferrer">
          {" "}
          <img className="logo" src={Logo} alt="imag not found" />
        </a>

        <div class="iconos">
          <i class="fas fa-search"></i>
          <i class="fas fa-bars"></i>
        </div>
      </div>
      <div className="row">
        <h1>CONTACTO</h1>
      </div>
    </header>
  );
};

export default Nav;
