import React, { useState } from "react";
import gifTwo from "../img/gifTwo.gif";
import Vector from "../img/Vector.png";
import logo from "../img/logo.png";
import touken from "../img/touken.png";
import logoInst from "../img/logoInst.png";
import logoLink from "../img/logoLink.png";
import "../style/InviFriends.css";

export default function InviFriends() {
  return (
    <main className="touken">
      <figure className="ctn-touken">
        <img className="icon-touken" src={touken} alt="touken" />
      </figure>
      <section>
        <div>
          <h1 className="title-touken">
            💃🏻 ¡Qué bueno que quieras sumarte! 🕺
            <br />
            ¡Antes de lanzar la app te contaremos cómo crear tu primer proyecto!
          </h1>
        </div>
        <figure className="ctnGifTwo">
          <img className="gifTwo" src={gifTwo} alt="icon touken" />
        </figure>

        <div className="ctn-link-touken">
          <h2 className="textFriend">
            <strong>Invita</strong> a otros <strong>creadores</strong>
            (cineastas, emprendedores, músicos, lo que
            <br /> quieras) con este link:
          </h2>
        </div>
        <div className="ctnLink">
          <button className="btn-link">
            <img src={Vector} alt="Vector" />
          </button>
        </div>
      </section>

      <footer style={{ justifyContent: "center", alignItems: "center" }}>
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
      </footer>
    </main>
  );
}
