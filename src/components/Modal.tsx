import React, { useState, FC } from 'react';
import './modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  usuarioId: number;  // Añadir el ID del usuario como prop
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, usuarioId }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const productData = {
      name: productName,
      price: parseFloat(price),
      description,
      imageUrl,
      usuarioId,  // Incluir el ID del usuario en los datos del producto
    };

    const response = await fetch('http://localhost:8080/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      alert('Producto agregado exitosamente!');
      onClose();
    } else {
      alert('Error al agregar el producto');
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Agregar Producto</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </label>
          <label>
            Precio:
            <input
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
          <label>
            Descripción:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
          <label>
            URL de la Imagen:
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </label>
          <button type="submit">Agregar Producto</button>
          <button type="button" onClick={onClose}>
            Cerrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
