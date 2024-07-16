import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import pato from '../assets/pato-de-goma 1.svg';
import mujer from '../assets/mujer 1.svg';
import sombrero from '../assets/sombrero 1.svg';
import logo from '../assets/logo.svg';
import Modal from './Modal';
import ProductCarousel from './ProductCarousel';
import './buscar.css';

const Buscar = () => {
  const location = useLocation();
  const selectedAvatar = location.state?.avatar;
  const usuarioId = location.state?.usuarioId; // Obtener el ID del usuario desde el estado de la ubicación
  const [isModalOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:8080/products?usuarioId=${usuarioId}`);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [usuarioId]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

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
      <button className="add-product-button" onClick={handleOpenModal}>
        Agregar Producto
      </button>
      <ProductCarousel products={products} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} usuarioId={usuarioId} />
    </div>
  );
};

export default Buscar;
