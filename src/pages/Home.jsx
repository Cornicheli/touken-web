import React from "react";
import { Link } from "react-router-dom";
import touken from "../img/touken.png";
import "../style/home.css";

function Home() {
  return (
    <section className="ctn-main">
      <figure className="ctn-logo">
        <img className="logo" src={touken} alt={touken} />
      </figure>
      <h1 className="title">
        Sé parte de proyectos creativos y
        <strong>
          <br />
          haz la diferencia.
        </strong>
      </h1>
      <div className="link">
        <Link className="link-submit" to="invitacion">
          👀
        </Link>
      </div>
    </section>
  );
}

export default Home;
