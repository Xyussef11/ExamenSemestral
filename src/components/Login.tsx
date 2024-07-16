import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import logo from '../assets/logo.svg';
import smart from '../assets/smart.svg';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      navigate("/inicio");
    } else {
      // Manejar errores de autenticación aquí
      alert("Error de autenticación. Por favor, revisa tus credenciales.");
    }
  };

  return (
    <div>
      <section className="marco">
        <div className="marco-child" />
        <div className="donation-banner">
          <div className="donation-banner-child" />
          <div className="donation-call-to-action">
            <div className="donation-message">
              <div className="haz-click-aqu-container">
                <p className="haz-click-aqu">¡Haz Click aquí!</p>
                <p className="dona-aqu-para">Dona aquí para apoyarnos</p>
                <p className="y"> Y</p>
                <p className="seguir-innovando"> Seguir Innovando</p>
              </div>
            </div>
            <div className="donacion-xd">
              <div className="donacion-xd-child" />
              <img className="smart-farm-1-1" loading="lazy" alt="" src={smart} />
              <div className="manda-tu-yappy">Manda tu yappy</div>
            </div>
          </div>
          <form className="account-creation" onSubmit={handleSubmit}>
            <div className="credentials">
              <div className="input-fields">
                <div className="correo-electrnico">Correo electrónico</div>
                <input
                  className="input-boxes"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-fields1">
                <div className="contrasea">Contraseña</div>
                <input
                  className="input-fields-child"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Link to="/registro_avatar" className="crear-cuenta">Crear cuenta</Link>
            </div>
            <div className="confirmation">
              <button className="confirmation-action">
                <div className="confirmation-action-child" />
                <div className="confirmar">Confirmar</div>
              </button>
            </div>
          </form>
          <img className="logo-conservas-del-patio-1" loading="lazy" alt="" src={logo} />
        </div>
      </section>
    </div>
  );
};

export default Login;
