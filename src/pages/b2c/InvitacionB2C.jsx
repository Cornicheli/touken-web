import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import touken from "../../img/touken.png";
import logoInst from "../../img/logoInst.png";
import logoLink from "../../img/logoLink.png";
import logo from "../../img/logo.png";
import mailService from "../../services/mail";
import "../../style/invitacion.css";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";

export default function InvitacionB2C() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("recommenderId"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("el email es requerido");
      return;
    }
    console.log("comenzo");
    setLoading(true);
    try {
      const recommenderId = searchParams.get("recommenderId");
      const dataUser = await mailService({ email }, "b2c", recommenderId);
      console.log(dataUser);
      if (dataUser.msg === "Registrado correctamente") {
        localStorage.setItem("session", "test"), navigate("/toukenb2c");
      } else {
        setMessage(dataUser.msg);
      }
    } catch (error) {
      console.log(error);
      setMessage(error.response.msg);
    }
    setEmail("");
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
            <p className="titleB2C" style={{ fontFamily: "Aileron" }}>
              <strong>Pronto</strong> lanzaremos la app.
              <br />
              <br />A las primeras <strong> 1000 personas </strong>
              le regalaremos su{" "}
              <strong>
                {" "}
                <br /> primer touken.{" "}
              </strong>
              <br />
              Durante un año repetiremos el{" "}
              <strong>
                {" "}
                5% de nuestros <br /> ingresos
              </strong>{" "}
              con los que tengan.
            </p>

            <form onSubmit={handleSubmit} className="send-mail">
              <input
                className="textInput"
                style={{ fontFamily: "Aileron" }}
                placeholder="Déjanos tu email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {message ? (
                <h2
                  style={{
                    marginTop: 15,
                    textDecoration: "underline",
                    marginBottom: 15,
                  }}
                >
                  {message}
                </h2>
              ) : null}
              {!loading ? (
                <button
                  className="btn-submit"
                  type="submit"
                  style={{ fontFamily: "Aileron" }}
                >
                  Quiero ser parte
                </button>
              ) : (
                <Spinner />
              )}
            </form>
          </div>
          <div className="image-container">
            <figure className="gif"></figure>
          </div>
        </section>
        <footer>
          <div className="proyect">
            <Link className="myproyect" to="/homeb2b">
              <img className="logo-ft" src={logo} alt="logo alerta" />
              Quiero crear un proyecto
            </Link>
          </div>
          <div className="none"></div>
          <div className="ctn-red-social">
            <div className="ctnRedSocial">
              <a className="link-red-social" href="">
                <img className="imgFooter" src={logoInst} alt="Instagram" />
              </a>
              <a className="link-red-social" href="">
                <img className="imgFooter" src={logoLink} alt="LinkeIn" />
              </a>
            </div>
            <div>
              <p className="text-ft" style={{ fontFamily: "Aileron" }}>
                Próximamente
              </p>
            </div>
          </div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="none"></div>
        </footer>
      </main>
    </>
  );
}
