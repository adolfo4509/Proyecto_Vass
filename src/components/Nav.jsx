import React from "react";
import Logo from "../img/Logo.png";
import "../scss/app.scss";

const Nav = () => {
  return (
    <header className="encabezado">
      <div className="container_">
        <a href="https://vasscompany.com/" target="_blank" rel="noreferrer">
          {" "}
          <img className="logo" src={Logo} alt="imag not found" />
        </a>

        <div className="iconos">
          <i className="fas fa-search"></i>
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <div className="row_">
        <h1 className="row_">CONTACTO</h1>
      </div>
    </header>
  );
};

export default Nav;
