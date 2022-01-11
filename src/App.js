import React from "react";
import Cuerpo from "./components/Cuerpo";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import "./scss/app.scss";

function App() {
  return (
    <div className="contenedor">
      <Nav />
      <section className="cuerpo">
        <h2>Empecemos a hacerlo sencillo</h2>

        <div className="subtitulo">
          <h3>Nos emociona impulsar tu transformación digital</h3>
        </div>
      </section>
      <section className="container2">
        <form action="">
          <div>
            <div className="form-group_">
              <label>
                Nombre y apellidos
                <input type="text" required></input>
              </label>
            </div>
            <div class="form-group_">
              <label>
                Email
                <input type="email" name="email" required></input>
              </label>
            </div>
            <div class="form-group_">
              <label>
                Empresa / Organismo
                <input type="text" name="empresa" required></input>
              </label>
            </div>
            <div class="form-group_">
              <label>
                Pais
                <input type="text" name="pais" required></input>
              </label>
            </div>
          </div>
          <div>
            <div class="form-group_">
              <label for="">
                Teléfono
                <input
                  type="tel"
                  name="telefono"
                  min="0"
                  max="10"
                  pattern="[0-9]*"
                  required
                ></input>
              </label>
            </div>
            <div class="form-group-mensaje">
              <label className="label_mensaje">Mensaje:</label>
              <textarea
                className="form-control"
                name="mensaje"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="boton">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </section>
      <Cuerpo />
      <Footer />
    </div>
  );
}

export default App;
