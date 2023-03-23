import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gifTwo from "../../img/gifTwo.gif";
import Vector from "../../img/Vector.png";
import logo from "../../img/logo.png";
import touken from "../../img/touken.png";
import logoInst from "../../img/logoInst.png";
import logoLink from "../../img/logoLink.png";
import "../../style/InviFriends.css";

export default function ToukenB2B() {
  const navigate = useNavigate();
  useEffect(() => {
    let user = localStorage.getItem("session");
    if (user === null) {
      navigate("/");
    }
  }, []);

  
const [share, setShare]= React.useState(false);


const Copy = async () =>{
  try {
    await navigator.clipboard.writeText('https://touken.io/');
    console.log('Content copied to clipboard');
    setShare(true)
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}



  return (
    <main className="touken">
      <figure className="ctn-touken">
        <img className="icon-touken" src={touken} alt="touken" />
      </figure>
      <section>
        <div>
          <h1 className="titleTouken">
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
        {/*<div className="ctnLink">
          <div className="link-inv">
            <button className="btn-link">
              <span className="inv-tile">Touken</span>
              <img className="logo-btn" src={Vector} alt="Vector" />
            </button>
          </div>
        </div>*/}
        
        <div onClick={()=> Copy()} className="link link-inv" to="/invitacionb2c" style={{width:'30%'}}>
        <div className="link-submit">
          {!share ? <><span className="invitation-tile">Touken</span>
          <span className="icon-tileFinal" ><img className="logo-btn" src={Vector} alt="Vector" /></span></> : <>
          <span >¡Link copiado!</span></> }
        </div>
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
