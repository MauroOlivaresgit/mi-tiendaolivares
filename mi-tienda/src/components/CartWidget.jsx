// src/components/CartWidget.jsx
import React from 'react';

const CartWidget = () => {
  const itemCount = 3; // puedes cambiar esto dinámicamente más adelante

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      🛒
      <span>{itemCount}</span>
    </div>
  );
};

export default CartWidget;
