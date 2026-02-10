import React from 'react';

function TecnologiasList() {
  const tecnologias = [
    { id: 1, nombre: 'React' },
    { id: 2, nombre: 'Node.js' },
    { id: 3, nombre: 'Docker' },
    { id: 4, nombre: 'MongoDB' },
  ];

  return (
    <div>
      <h2>Lista de Tecnologías</h2>
      <ul>
        {tecnologias.map((tech) => (
          <li key={tech.id}>{tech.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default TecnologiasList;

