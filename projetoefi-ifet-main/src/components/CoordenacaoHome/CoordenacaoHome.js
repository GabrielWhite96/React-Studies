import React, {useState} from 'react';
import './CoordenacaoHome.css';
import CadastroProfessores from '../CadastroProfessores';
import CadastroAlunos from '../CadastroAlunos';

function CoordenacaoHome() {
  const [selectedContent, setSelectedContent] = useState(null);

  return (
    <div className="coordenacao-home">
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li onClick={() => setSelectedContent('turma')}>Cadastro de Turma</li>
          <li onClick={() => setSelectedContent('professor')}>Cadastro de Professor</li>
          <li onClick={() => setSelectedContent('aluno')}>Cadastro de Aluno</li>
        </ul>
      </div>
      <div className="content">
        {selectedContent === 'professor' && <CadastroProfessores />}
        {selectedContent === 'aluno' && <CadastroAlunos />}

      </div>
    </div>
  );
}

export default CoordenacaoHome;
