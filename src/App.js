import React from 'react';
import UserProfile from './UserProfile';
import TecnologiasList from './TecnologiasList';
import BotonInteractivo from './BotonInteractivo';
import ContadorPadre from './ContadorPadre';
import LoginLogout from './LoginLogout';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <UserProfile />
      <hr />
      <TecnologiasList />
      <hr />
      <BotonInteractivo />
      <hr />
      <ContadorPadre />
      <hr />
      <LoginLogout estaLogueado={false} />
      <LoginLogout estaLogueado={true} />
    </div>
  );
}

export default App;