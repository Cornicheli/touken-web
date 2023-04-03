import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import touken from "../../img/touken.png";
import iconTouken from "../../img/icon-touken.png";
import logo from "../../img/logo.png";
import arrowDown from "../../img/arrowDown.png";
import "../../style/touken.css";
import gifTwo from "../../img/gifTwo.gif";
import Vector from "../../img/Vector.png";
import logoInst from "../../img/logoInst.png";
import logoLink from "../../img/logoLink.png";

export default function ToukenB2C() {
  const navigate = useNavigate();
  useEffect(() => {
    let user = localStorage.getItem("session");
    if (user === null) {
      navigate("/");
    }
  }, []);

  const [share, setShare] = React.useState(false);

  const Copy = async () => {
    try {
      await navigator.clipboard.writeText("https://touken.io/");
      console.log("Content copied to clipboard");
      setShare(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <main className="touken">
        <figure
          className="ctnTouken"
          style={{
            backdropFilter: "blur(10px)",
          }}
        >
          <img className="icon-touken" src={touken} alt="touken" />
        </figure>
        <section style={{ marginTop: "15vh" }}>
          <div className="textTouken ml-100 mr-100">
            <h1 className="title-touken">
              💃🏻 ¡Qué bueno que quieras sumarte! 🕺
              <br />
            </h1>
            <h2 className="sub-title-touken">
              ¡Cuando lancemos la app te contaremos cómo{" "}
              <strong>canjear</strong> tu <strong>touken</strong> de
              <strong> regalo!</strong>
            </h2>
          </div>
          <figure className="ctn-logo-inv">
            <img className="img-logo-inv" src={iconTouken} alt="icon touken" />
          </figure>
          <div className="ctn-link-touken">
            <a className="link-text-touken" href="#">
              ¡Espera! Hay más 🤫
            </a>
            <Link className="link-logo" to="#">
              <img
                className="imgToukenArrow"
                src={arrowDown}
                alt="arrown down"
              />
            </Link>
          </div>
        </section>
        <footer></footer>

        <section>
          <div>
            <h1 className="titleTouken">
              Creemos que la mejor forma de <br />
              <strong> crear es crear juntos </strong>
            </h1>
          </div>
          <figure className="ctnGifTwo">
            <img className="gifTwo" src={gifTwo} alt="icon touken" />
          </figure>
          <div className="ctn-link-touken">
            <h2 className="textFriend">
              Invita a tus amig@s con <strong> este link </strong> <br /> Por
              cada uno que se registre en la <strong> app ganas más </strong>
            </h2>
          </div>

          <div
            onClick={() => Copy()}
            className="link link-inv"
            to="/invitacionb2c"
            // style={{ width: "30%" }}
          >
            <div className="link-submit">
              {!share ? (
                <>
                  <span className="invitation-tile">Touken</span>
                  <span className="icon-tileFinal">
                    <img className="logo-btn" src={Vector} alt="Vector" />
                  </span>
                </>
              ) : (
                <>
                  <span>¡Link copiado!</span>
                </>
              )}
            </div>
          </div>
        </section>
        <footer style={{ justifyContent: "center", alignItems: "center" }}>
          <div className="ctn-red-social">
            <div className="ctnRedSocial">
              <a className="link-red-social" href="">
                <img className="imgFooter" src={logoInst} alt="Instagram" />
              </a>
              <a className="link-red-social" href="">
                <img className="imgFooter" src={logoLink} alt="LinkeIn" />
              </a>
            </div>
            <p className="text-ft">Próximamente</p>
          </div>
        </footer>
      </main>
    </>
  );
}
