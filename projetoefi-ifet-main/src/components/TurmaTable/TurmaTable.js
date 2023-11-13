// src/components/TurmaTable.js

import React from 'react';
import './TurmaTable.css';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importando ícones

const TurmaTable = ({ turmas, onEdit, onDelete }) => {
    if (!turmas || turmas.length === 0) {
        return <p>Nenhum turma encontrado.</p>;
    }

    return (
        <table className="turma-table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {turmas.map(turma => (
                    <tr key={turma.id}>
                        <td>{turma.nome}</td>
                        <td>
                            <FaEdit className="icon-edit" onClick={() => onEdit(turma)} />
                            <FaTrash className="icon-remove" onClick={() => onDelete(turma.cpf)} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TurmaTable;