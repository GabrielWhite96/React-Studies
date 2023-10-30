// src/components/AlunoItem.js

import React from 'react';
import './AlunoItem.css';

const AlunoItem = ({ aluno, onDelete, onEdit }) => {
    return (
        <div className="aluno-item">
            <div className="aluno-details">
                <span><strong>Nome:</strong> {aluno.nome}</span>
                <span><strong>Email:</strong> {aluno.email}</span>
                <span><strong>Sexo:</strong> {aluno.sexo}</span>
                <span><strong>Idade:</strong> {aluno.idade}</span>
                <span><strong>Matricula:</strong> {aluno.matricula}</span>
            </div>
            <div className="aluno-actions">
                <button onClick={() => onEdit(aluno)}>Editar</button>
                <button onClick={() => onDelete(aluno.id)}>Deletar</button>
            </div>
        </div>
    );
}

export default AlunoItem;
