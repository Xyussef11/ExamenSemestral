import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pato from '../assets/pato-de-goma 1.svg';
import mujer from '../assets/mujer 1.svg';
import sombrero from '../assets/sombrero 1.svg';
import logo from '../assets/logo.svg';
import './registro_avatar.css';

interface RegistroAvatarProps {
  className?: string;
}

const Registro_Avatar: React.FC<RegistroAvatarProps> = ({ className = "" }) => {
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleAvatarClick = (avatar: string) => {
    setSelectedAvatar(avatar);
    navigate('/registro', { state: { avatar } });
  };

  return (
    <div className={`registro_avatar-registro-avatar ${className}`}>
      <div className="registro_avatar-rectangle-parent">
        <div className="registro_avatar-frame-child" />
        <div className="registro_avatar-empezemos-a-crear-esa-cuenta-parent">
          <div className="registro_avatar-empezemos-a-crear-container">
            <p className="registro_avatar-empezemos-a-crear">
              ¡Empezemos a crear esa cuenta!
            </p>
            <p className="registro_avatar-elige-tu-avatar">Elige tu avatar:</p>
          </div>
          <div className="registro_avatar-empezemos-a-crear-esa-cuenta-wrapper">
            <div className="registro_avatar-empezemos-a-crear-container1">
              <p className="registro_avatar-empezemos-a-crear1">
                ¡Empezemos a crear esa cuenta!
              </p>
              <p className="registro_avatar-elige-tu-avatar1">Elige tu avatar:</p>
            </div>
          </div>
        </div>
      </div>
      <section className="registro_avatar-avatar-selection">
        <img
          className="registro_avatar-logo-tienda-de-frutas-y-verdur"
          loading="lazy"
          alt=""
          src={logo}
        />
        <div className="registro_avatar-marco">
          <div className="registro_avatar-marco-child" />
          <footer className="registro_avatar-men-parent">
            <div className="registro_avatar-men" />
            <div className="registro_avatar-frame-item" />
          </footer>
        </div>
        <div className="registro_avatar-avatar-options">
          <div className="registro_avatar-women" onClick={() => handleAvatarClick('pato')}>
            <img
              className="registro_avatar-pato-de-goma-1-icon"
              loading="lazy"
              alt=""
              src={pato}
            />
          </div>
        </div>
        <div className="registro_avatar-avatar-options1">
          <div className="registro_avatar-nav-rect" onClick={() => handleAvatarClick('mujer')}>
            <img
              className="registro_avatar-mujer-1-icon"
              loading="lazy"
              alt=""
              src={mujer}
            />
          </div>
        </div>
        <div className="registro_avatar-avatar-options2">
          <div className="registro_avatar-kids" onClick={() => handleAvatarClick('sombrero')}>
            <img
              className="registro_avatar-sombrero-1-icon"
              loading="lazy"
              alt=""
              src={sombrero}
            />
          </div>
        </div>
        <div className="registro_avatar-pehnava" />
      </section>
    </div>
  );
};

export default Registro_Avatar;
