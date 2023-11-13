// src/components/TurmaForm.js
import "./TurmaForm.css";
import Turma from "../../models/Turma";
import { useState } from 'react'

const TurmaForm = ({ onSubmit, turma }) => {
  const [turmaData, setTurmaData] = useState(turma || new Turma());

  const handleSubmit = (e) => {
    e.preventDefault();
    setTurmaData(new Turma());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
      <input
        type="text"
        placeholder="Nome"
        value={turmaData.nome}
        onChange={(e) => setTurmaData({ ...turmaData, nome: e.target.value })}
        required
      />
      </label>

      <button type="submit">{turma ? "Atualizar" : "Adicionar"}</button>
    </form>
  );
};

export default TurmaForm;
