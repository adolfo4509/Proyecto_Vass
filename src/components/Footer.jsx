import React from "react";
import "../scss/app.scss";

const Footer = () => {
  let copy = (/\u00A9/g, "©");
  return (
    <div className="container_footer">
      <span className="copyright">
        Copyright{copy} Todos los derechos reservados 2021{" "}
      </span>
      <div className="politicas">
        <span>Memoria ambiental</span>
        <span>Politica de cookies</span>{" "}
      </div>
      <span>Politica de privacidad</span>{" "}
      <div className="politicas_">
        <span>Politica de calidad y medio ambiente</span>
      </div>
      <div className="social_redes">
        <i className="fab fa-twitter"></i>
        <i className="fab fa-linkedin-in"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-youtube"></i>
      </div>
    </div>
  );
};

export default Footer;
