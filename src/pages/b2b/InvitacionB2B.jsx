import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../style/invitacion.css";
import touken from "../../img/touken.png";
import logoInst from "../../img/logoInst.png";
import logoLink from "../../img/logoLink.png";
import gif from "../../img/gif.gif";
import axios from "axios";
import API_URL from "../../api/api";
import mailService from "../../services/mail";
import Spinner from "../../components/Spinner/Spinner";

export default function InvitacionB2B() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("el email es requerido");
      return;
    }
    setLoading(true);

    try {
      console.log(email);
      const dataUser = await mailService(email, "b2b");
      if (dataUser.msg === "Registrado correctamente") {
        localStorage.setItem("session", "test"), navigate("/toukenb2b");
      } else {
        setMessage(dataUser.msg);
      }
      /*axios.post(`${API_URL}/api/user?type=creator`, {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Basic Y2h1bGk6MTIzNDU2",
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });*/

      /*const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic Y2h1bGk6MTIzNDU2",
        },
      };
      const { data } = await axios.post(
        `${API_URL}/api/user?type=creator`,
        { email },
        config,
        localStorage.setItem("session", "test"),
        navigate("/toukenb2b")
      );
      setMessage(data.msg);*/
    } catch (error) {
      console.log(error.response);
      setMessage(error.response.data.msg);
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
            <p className="title">
              <strong>Pronto</strong> lanzaremos la app.
              <br />
              Las primeras
              <strong> 1000 personas</strong>
              podran crear su primer proyecto <strong>gratis.</strong> <br />
              Encuentra tu
              <strong> espacio ideal </strong>
              para crear junto a tu <br />
              <strong> comunidad </strong> proyectos
              <strong> unicos </strong>
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

        <footer style={{ justifyContent: "center", alignItems: "center" }}>
          <div className="ctn-red-social">
            <div className="ctnRedSocial">
              <a className="link-red-social" href="">
                <img src={logoInst} alt="Instagram" />
              </a>
              <a className="link-red-social" href="">
                <img src={logoLink} alt="LinkeIn" />
              </a>
            </div>
            <p className="text-ft">Próximamente</p>
          </div>
        </footer>
      </main>
    </>
  );
}
