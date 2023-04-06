import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../style/invitacion.css";
import touken from "../../img/touken.png";
import logoInst from "../../img/logoInst.png";
import logoLink from "../../img/logoLink.png";
import gif from "../../img/gif.gif";
import axios from "axios";
import mailService from "../../services/mail";
import Category from "../../components/Category";
import Spinner from "../../components/Spinner/Spinner";

export default function InvitacionB2B() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic Y2h1bGk6MTIzNDU2
            `,
        },
      };
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/creator/categories",
          config
        );
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !category || !url) {
      setMessage("Los campos son requeridos");
      return;
    }
    setLoading(true);
    try {
      console.log(email, category, url);
      const dataForm = {
        email,
        socialNetworks_website: url,
        category,
      };
      const dataUser = await mailService(dataForm, "b2b");
      if (dataUser.msg === "Registrado correctamente") {
        localStorage.setItem("session", "test"), navigate("/toukenb2b");
      } else {
        setMessage(dataUser.msg);
      }
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
          <img className="iconTouken" src={touken} alt="touken" />
        </figure>

        <section className="ctnInv">
          <div className="ctn-info">
            <p className="titleB2B" style={{ fontFamily: "Aileron" }}>
              <strong>Pronto</strong> lanzaremos la app.
              <br />
              <br />
              Estamos buscando a los <strong> primeros proyectos </strong>
              <br /> que quieran llevar <strong> su comunidad </strong>
              <br />a otro nivel.
            </p>
            <form onSubmit={handleSubmit} className="send-mail">
              <input
                className="text-input"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>
                <input
                  className="text-social-input"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  type="text"
                  placeholder="RRSS / Página web"
                />
              </label>

              <label className="ctn-select-input">
                <select
                  className="select-input"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option
                    className="opciones-input"
                    selected
                    hidden
                    placeholder="¿De qué rubro/área eres?"
                  >
                    ¿De qué rubro/área eres?
                  </option>
                  {categories.length
                    ? categories.map((category, index) => (
                        <Category key={index} category={category} />
                      ))
                    : null}
                </select>
              </label>

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
