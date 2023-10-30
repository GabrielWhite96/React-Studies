import React from 'react';
import './AlunosHome.css';

function AlunosHome() {
  return (
    <div className="alunos-home">
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li>Meu Perfil</li>
          <li>Minhas Avaliações</li>
        </ul>
      </div>
      <div className="content">
        <h1>Alunos Home</h1>
      </div>
    </div>
  );
}

export default AlunosHome;