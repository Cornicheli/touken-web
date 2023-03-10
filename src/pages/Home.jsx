import React from "react";
import { Link } from "react-router-dom";
import touken from "../img/touken.png";
import "../style/home.css";
import pieza1 from "../img/pieza1.png";
import pieza2 from "../img/pieza2.png";

function Home() {
  const [divOpacity, setDivOpacity] = React.useState(0);
  const [animation, setAnimation] = React.useState(false);

  React.useEffect(() => {
    setDivOpacity(1);
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
    }, 1000);
  }, []);

  return (
    <section className="ctn-main fade-in" style={{ opacity: divOpacity }}>
      <figure className="ctn-logo">
        <img className="logo" src={touken} alt={touken} />
      </figure>
      <div>
        <h1 className="title">Sé parte de proyectos creativos y</h1>
        <strong>
          <h1>
            <span
              className="subtitle"
              style={{
                marginLeft: animation ? "0px" : "-100%",
                transition: "1s",
              }}
            >
              haz la diferencia.
            </span>
          </h1>
        </strong>
      </div>

      <Link className="link" to="invitacion">
        <Link className="link-submit">
          <span className="invitation-tile">A ver</span>
          <span className="icon-tile">👀</span>
        </Link>
      </Link>
      <img
        className="img-button"
        src={pieza1}
        style={{
          marginLeft: animation ? "0px" : "-270px",
          transition: "1s",
        }}
      />
      <img
        className="img-top"
        src={pieza2}
        style={{
          marginRight: animation ? "0px" : "-180px",
          transition: "1s",
        }}
      />
    </section>
  );
}

export default Home;
