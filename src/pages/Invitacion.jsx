import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/invitacion.css";
import touken from "../img/touken.png";
import logo from "../img/logo.png";
import logoInst from "../img/logoInst.png";
import logoLink from "../img/logoLink.png";
import gif from "../img/gif.png";

export default function Invitacion() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email enviado: ${email}`);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <main className="invitacion">
        <figure className="ctn-touken">
          <img className="icon-touken" src={touken} alt="touken" />
        </figure>

        <section className="ctn-inv">
          <div className="ctn-info">
            <br />
            <h1 className="title">
              <strong>Pronto</strong> lanzaremos la app. <br />
            </h1>

            <p className="ctn-text">
              A las primeras
              <strong>1000 personas</strong> le regalaremos
              <strong>su primer touken.</strong> <br />
              Durante un año repartiremos
              <strong>el 5% de</strong>
              <strong>
                nuestros <br />
                ingresos
              </strong>
              con los que lo tengan.
            </p>

            <form onSubmit={handleSubmit} className="send-mail">
              <input
                className="text-input"
                type="email"
                placeholder="Dejanos tu email"
                value={email}
                onChange={handleEmailChange}
                required
              />

              <button className="btn-submit" type="submit">
                Quiero ser parte
              </button>
            </form>
          </div>

          <figure className="gif">
            <img className="img-gif" src={gif} alt="" />
          </figure>
        </section>

        <footer>
          <div className="proyect">
            <Link className="myproyect" to="/touken">
              <img className="logo-ft" src={logo} alt="logo alerta" />
              Quiero crear un proyecto
            </Link>
          </div>
          <div className="none"></div>

          <div className="ctn-red-social">
            <div>
              <a className="link-red-social" href="">
                <img src={logoInst} alt="Instagram" />
              </a>
              <a className="link-red-social" href="">
                <img src={logoLink} alt="LinkeIn" />
              </a>
            </div>
            <p className="text-ft">Próximamente</p>
          </div>

          <div className="none"></div>
          <div className="none"></div>
          <div className="none"></div>
        </footer>
      </main>
    </>
  );
}
