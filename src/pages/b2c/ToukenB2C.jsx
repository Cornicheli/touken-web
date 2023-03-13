import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import touken from "../../img/touken.png";
import iconTouken from "../../img/icon-touken.png";
import logo from "../../img/logo.png";
import arrowDown from "../../img/arrowDown.png";
import "../../style/touken.css";

export default function ToukenB2C() {
  const navigate = useNavigate();
  useEffect(() => {
    let user = localStorage.getItem("session");
    if (user === null) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <main className="touken">
        <figure className="ctn-touken">
          <img className="icon-touken" src={touken} alt="touken" />
        </figure>
        <section>
          <div>
            <h1 className="title-touken">
              💃🏻 ¡Qué bueno que quieras sumarte! 🕺
              <br />
            </h1>
            <h2 className="sub-title-touken">
              ¡Cuando lancemos la app te contaremos cómo
              <strong>canjear</strong> tu <strong>touken</strong> <br /> de
              regalo!
            </h2>
          </div>
          <figure className="ctn-logo-inv">
            <img className="img-logo-inv" src={iconTouken} alt="icon touken" />
          </figure>
          <div className="ctn-link-touken">
            <a className="link-text-touken" href="#">
              ¡Esperá! Hay más 🤫
            </a>
            <Link className="link-logo" to="#">
              <img src={arrowDown} alt="arrown down" />
            </Link>
          </div>
        </section>
        <footer>
          <div className="proyect-touken">
            <a className="myproyect" href="#">
              <img className="logo-ft" src={logo} alt="logo alerta" />
              Quiero crear un proyecto
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
