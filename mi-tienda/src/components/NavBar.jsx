// src/components/NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f4f4f4' }}>
      <div>
        <h2>MiTienda</h2>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="/">Inicio</a>
        <a href="/productos">Productos</a>
        <a href="/contacto">Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
