// src/components/ProfessorItem.js

import React from 'react';
import './ProfessorItem.css';

const ProfessorItem = ({ professor, onDelete, onEdit }) => {
    return (
        <div className="professor-item">
            <div className="professor-details">
                <span><strong>Nome:</strong> {professor.nome}</span>
                <span><strong>Email:</strong> {professor.email}</span>
                <span><strong>Sexo:</strong> {professor.sexo}</span>
                <span><strong>Idade:</strong> {professor.idade}</span>
                <span><strong>Matricula:</strong> {professor.matricula}</span>
            </div>
            <div className="professor-actions">
                <button onClick={() => onEdit(professor)}>Editar</button>
                <button onClick={() => onDelete(professor.id)}>Deletar</button>
            </div>
        </div>
    );
}

export default ProfessorItem;
