import React from 'react';
import { useLocation } from 'react-router-dom';
import pato from '../assets/pato-de-goma 1.svg';
import mujer from '../assets/mujer 1.svg';
import sombrero from '../assets/sombrero 1.svg';
import logo from '../assets/logo.svg';
import './buscar.css';

const Buscar = () => {
  const location = useLocation();
  const selectedAvatar = location.state?.avatar;

  return (
    <div className="buscar">
      <div className="buscar-inner">
        <header className="frame-parent">
          <div className="frame-wrapper">
            <div className="rectangle-parent">
              <div className="frame-child" />
              <div className="frame-item" />
              <div className="frame-inner" />
            </div>
          </div>
          <img
            className="logo-tienda-de-frutas-y-verdur"
            loading="lazy"
            alt=""
            src={logo}
          />
          <div className="frame-container">
            <div className="group-div">
              <div className="ellipse-parent">
                <div className="ellipse-div" />
                {selectedAvatar === 'pato' && (
                  <img
                    className="pato-de-goma-1-icon"
                    loading="lazy"
                    alt=""
                    src={pato}
                  />
                )}
                {selectedAvatar === 'mujer' && (
                  <img
                    className="mujer-1-icon"
                    loading="lazy"
                    alt=""
                    src={mujer}
                  />
                )}
                {selectedAvatar === 'sombrero' && (
                  <img
                    className="sombrero-1-icon"
                    loading="lazy"
                    alt=""
                    src={sombrero}
                  />
                )}
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="navigation-content-wrapper">
        <div className="navigation-content">
          <div className="navigation-content-child" />
          <button className="vector-parent">
            <img className="rectangle-icon" alt="" src="/rectangle-21.svg" />
            <img className="inicio-icon" alt="" src="/inicio@2x.png" />
          </button>
          <div className="frame-group">
            <button className="rectangle-group">
              <div className="rectangle-div" />
              <img className="buscar-icon" alt="" src="/buscar@2x.png" />
            </button>
            <div className="vector-group">
              <img className="frame-child1" alt="" src="/rectangle-18.svg" />
              <img
                className="image-1-icon"
                loading="lazy"
                alt=""
                src="/image-11@2x.png"
              />
              <div className="notification-icon-parent">
                <div className="notification-icon" />
                <div className="notification-count">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buscar-child">
        <div className="rectangle-container">
          <div className="frame-child2" />
          <input
            type="text"
            placeholder="Buscar"
            className="buscar-input"
          />
        </div>
      </div>
    </div>
  );
};

export default Buscar;
