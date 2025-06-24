// src/components/ItemListContainer.jsx
import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <h3>{greeting}</h3>
    </section>
  );
};

export default ItemListContainer;
