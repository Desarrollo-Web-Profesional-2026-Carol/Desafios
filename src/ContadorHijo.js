import React from 'react';

function ContadorHijo({ valor, onIncrementar, nombre }) {
  return (
    <div>
      <button onClick={onIncrementar}>
        {nombre} - Clics: {valor}
      </button>
    </div>
  );
}

export default ContadorHijo;
