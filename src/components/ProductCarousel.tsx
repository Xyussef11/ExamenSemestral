import React from 'react';
import './productCarousel.css';

interface Product {
  producto_id: number;
  nombre: string;
  imagen_url: string;
  precio: number;
  descripcion: string;
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  return (
    <div className="product-carousel">
      {products.map((product) => (
        <div key={product.producto_id} className="product-card">
          <img src={product.imagen_url} alt={product.nombre} className="product-image" />
          <div className="product-details">
            <h3 className="product-name">{product.nombre}</h3>
            <p className="product-price">${product.precio.toFixed(2)}</p>
            <p className="product-description">{product.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCarousel;
