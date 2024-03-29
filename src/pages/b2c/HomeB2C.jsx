import React from "react";
import { Link, Navigate } from "react-router-dom";
import touken from "../../img/touken.png";
import pieza1 from "../../img/pieza1.png";
import pieza2 from "../../img/pieza2.png";
import { Slide } from "react-reveal";

import "../../style/home.css";

function HomeB2C() {
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
    <div className="ctnMainHome fade-in" style={{ opacity: divOpacity }}>
      <figure className="ctnLogo">
        <img className="logoHome" src={touken} alt={touken} />
      </figure>
      <div>
        <h1 className="titleB2C2">Co-crea y crece con tus marcas </h1>
        <strong>
          <h1>
            <Slide left>
              <span
                className="subtitleB2C"
                // style={
                //   {
                //     marginLeft: animation ? "0px" : "-100%",
                //     transition: "1s",
                //   }
                // }
              >
                favoritas y gana recompensas
              </span>
            </Slide>
          </h1>
        </strong>
      </div>

      <Link className="link" to="/invitacionb2c">
        <div className="link-submit">
          <span className="invitation-tile">A ver</span>
          <span className="icon-tile">👀</span>
        </div>
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
    </div>
  );
}

export default HomeB2C;
