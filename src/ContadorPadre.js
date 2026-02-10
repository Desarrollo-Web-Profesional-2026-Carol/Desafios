import React, { useState } from 'react';
import ContadorHijo from './ContadorHijo';

function ContadorPadre() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Contadores Sincronizados</h2>
      <p>Contador global: {count}</p>
      <ContadorHijo valor={count} onIncrementar={incrementar} nombre="Botón A" />
      <ContadorHijo valor={count} onIncrementar={incrementar} nombre="Botón B" />
    </div>
  );
}

export default ContadorPadre;
