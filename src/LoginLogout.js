import React, { useState } from 'react';

function LoginLogout() {
  const [estaLogueado, setEstaLogueado] = useState(false);

  const handleLogin = () => {
    setEstaLogueado(true);
  };

  const handleLogout = () => {
    setEstaLogueado(false);
  };

  return (
    <div>
      <h2>Control de Acceso</h2>
      {estaLogueado ? (
        <div>
          <p>¡Bienvenido!</p>
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      ) : (
        <div>
          <p>Por favor inicia sesión</p>
          <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
      )}
    </div>
  );
}

export default LoginLogout;
