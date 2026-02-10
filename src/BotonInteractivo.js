import React, { useState } from 'react';

function BotonInteractivo() {
  const [texto, setTexto] = useState('Haz clic aquí');

  const handleClick = () => {
    setTexto('¡Botón presionado!');
  };

  return (
    <div>
      <h2>Botón Interactivo</h2>
      <button onClick={handleClick}>{texto}</button>
    </div>
  );
}

export default BotonInteractivo;