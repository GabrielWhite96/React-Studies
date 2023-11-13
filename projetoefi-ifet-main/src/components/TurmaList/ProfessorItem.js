// src/components/TurmaItem.js

import React from 'react';
import './TurmaItem.css';

const TurmaItem = ({ turma, onDelete, onEdit }) => {
    return (
        <div className="turma-item">
            <div className="turma-details">
                <span><strong>Nome:</strong> {turma.nome}</span>
            </div>
            <div className="turma-actions">
                <button onClick={() => onEdit(turma)}>Editar</button>
                <button onClick={() => onDelete(turma.id)}>Deletar</button>
            </div>
        </div>
    );
}

export default TurmaItem;
