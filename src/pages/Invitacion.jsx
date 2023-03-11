import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/invitacion.css";
import touken from "../img/touken.png";
import logo from "../img/logo.png";
import logoInst from "../img/logoInst.png";
import logoLink from "../img/logoLink.png";
import gif from "../img/gif.gif";
import axios from "axios";
import API_URL from "../api/api";
import Spinner from "../components/Spinner/Spinner";

export default function Invitacion() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("el email es requerido");
      return;
    }

    setLoading(true);

    try {
      const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Basic Y2h1bGk6MTIzNDU2'
        }
      }

      const { data } = await axios.post(`${API_URL}/api/user?type=creator`, { email }, config);
      setMessage(data.msg);

    } catch (error) {
      console.log(error);
      setMessage(error.response.data.msg);
    }

    setEmail('');
    setLoading(false);
  };



  return (
    <>
      <main className="Invitacion">
        <figure className="ctn-touken">
          <img className="icon-touken" src={touken} alt="touken" />
        </figure>

        <section className="ctnInv">
          <div className="ctn-info">
            <br />
            <h1 className="title">
              <strong>Pronto</strong> lanzaremos la app.
              <br />
            </h1>

            <p className="ctn-text">
              A las primeras
              <strong> 1000 personas</strong> le regalaremos
              <strong> su primer touken.</strong> <br />
              Durante un año repartiremos
              <strong> el 5% de</strong>
              <strong>
                nuestros <br />
                ingresos
              </strong>
              con los que lo tengan.
            </p>

            <form onSubmit={handleSubmit} className="send-mail">
              <input
                className="text-input"
                placeholder="Dejanos tu email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {message ? (
                <h2 style={{ marginTop: 15, textDecoration: "underline" }}>
                  {message}
                </h2>
              ) : null}
              {/* {click ? (
                <h2 style={{ marginTop: 15, textDecoration: "underline" }}>
                  {message}
                </h2>
              ) : null} */}

              {
                !loading ? (
                  <button
                    className="btn-submit"
                    type="submit"
                    // onClick={handleClick}
                  >
                    Quiero ser parte
                  </button>
                ) : (
                  <Spinner/>
                )
              }


            </form>
          </div>

          <div className="image-container">
            <figure className="gif">
              {/*<img className="img-gif" src={gif} alt="" />*/}
            </figure>
          </div>
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
