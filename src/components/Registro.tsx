import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './registro.css';
import logo from '../assets/logo.svg';

const Registro: React.FC = () => {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar que los campos de correo electrónico y confirmar correo sean iguales
    if (form.email !== form.confirmEmail) {
      setError('Los correos electrónicos no coinciden');
      return;
    }

    // Verificar que los campos de contraseña y confirmar contraseña sean iguales
    if (form.password !== form.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Si las validaciones pasan, preparar el objeto de datos para enviar a la API
    const userData = {
      nombre: form.nombre,
      apellido: form.apellido,
      telefono: form.telefono,
      email: form.email,
      password: form.password,
    };

    // Realizar la petición POST a la API
    try {
      const response = await fetch('http://localhost:8080/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.mensaje || 'Error en el registro');
        return;
      }

      const data = await response.json();
      console.log('Registro exitoso:', data);
      
      // Redirigir a la página de inicio de sesión después del registro exitoso
      navigate('/');

    } catch (error) {
      console.error('Error al registrar:', error);
      setError('Error al registrar. Inténtalo de nuevo.');
      window.location.reload(); // Recargar la página en caso de error
    }
  };

  return (
    <div className="registro-marco">
      <div className="registro-marco-child">
        <form className="registro-account-creation" onSubmit={handleSubmit}>
          <div className="registro-credentials">
            <div className="registro-input-fields">
              <label className="registro-label">Nombre</label>
              <input
                type="text"
                name="nombre"
                className="registro-input-boxes"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="registro-input-fields">
              <label className="registro-label">Apellido</label>
              <input
                type="text"
                name="apellido"
                className="registro-input-boxes"
                value={form.apellido}
                onChange={handleChange}
                required
              />
            </div>
            <div className="registro-input-fields">
              <label className="registro-label">Número de Teléfono</label>
              <input
                type="tel"
                name="telefono"
                className="registro-input-boxes"
                value={form.telefono}
                onChange={handleChange}
                required
              />
            </div>
            <div className="registro-input-fields">
              <label className="registro-label">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                className="registro-input-boxes"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="registro-input-fields">
              <label className="registro-label">Confirmar Correo Electrónico</label>
              <input
                type="email"
                name="confirmEmail"
                className="registro-input-boxes"
                value={form.confirmEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="registro-input-fields">
              <label className="registro-label">Contraseña</label>
              <input
                type="password"
                name="password"
                className="registro-input-boxes"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="registro-input-fields">
              <label className="registro-label">Confirmar Contraseña</label>
              <input
                type="password"
                name="confirmPassword"
                className="registro-input-boxes"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {error && <p className="registro-error-message">{error}</p>}
          <div className="registro-confirmation">
            <button type="submit" className="registro-confirmation-action">
              <span className="registro-confirmar">Confirmar</span>
            </button>
          </div>
        </form>
        <img src={logo} alt="Logo" className="registro-logo" />
      </div>
    </div>
  );
};

export default Registro;
