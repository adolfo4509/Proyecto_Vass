import React from "react";
import { Link } from "react-router-dom";
import "../scss/app.scss";

const Cuerpo = () => {
  return (
    <div className="container_cuerpo">
      <div className="titulo_cuerpo">
        <div></div>
        <h3>Complex made simple</h3>
      </div>
      <div className="container_cuerpo_links">
        <div className="sistem_Vass">
          <h4>Sistemap VASS</h4>
          <Link to="/">Home</Link>
          <Link to="/">Casos éxito</Link>
          <Link to="/">Somos VASS</Link>
          <Link to="/">Impactos</Link>
          <Link to="/">Método</Link>
          <Link to="/">Tecnologías</Link>
          <Link to="/">Proyectos I+D+i</Link>
          <Link to="/">Insights</Link>
          <Link to="/">Noticias</Link>
          <Link to="/">VAS Research</Link>
          <Link to="/">Canal de denuncias</Link>
          <Link to="/">Contacto</Link>
        </div>
        <div className="sistem_Vass_Talent">
          <h3>Sistemap Talento</h3>
          <Link to="/">Talento</Link>
          <Link to="/">#lifeVASS</Link>
          <Link to="/">Beneficios</Link>
          <Link to="/">Planes para ti</Link>
          <Link to="/">Proyectos</Link>
          <Link to="/">Smartworking</Link>
          <Link to="/">Ofertas</Link>
        </div>
        <div className="sistem_Vass_">
          <h4>Empresas</h4>
          <Link to="/">VASS</Link>
          <Link to="/">Nateevo</Link>
          <Link to="/">Servatic</Link>
          <Link to="/">vdShop</Link>
        </div>
      </div>
    </div>
  );
};

export default Cuerpo;
