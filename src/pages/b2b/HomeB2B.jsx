import React from "react";
import { Link, Navigate } from "react-router-dom";
import touken from "../../img/touken.png";
import pieza1 from "../../img/pieza1.png";
import pieza2 from "../../img/pieza2.png";
import { Slide } from "react-reveal";

import "../../style/home.css";

function HomeB2B() {
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
        <h1 className="titleB2BHome">Co-crea y crece con</h1>
        <strong>
          <h1>
            <Slide left>
              <span
                className="subtitle"
                // style={
                //   {
                //     marginLeft: animation ? "-172px" : "-100%",
                //     transition: "1s",
                //   }
                // }
              >
                tu comunidad
              </span>
            </Slide>
          </h1>
        </strong>
      </div>

      <Link className="link" to="/invitacionb2b">
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

export default HomeB2B;
