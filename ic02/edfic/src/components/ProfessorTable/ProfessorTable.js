// src/components/ProfessorTable.js

import React from 'react';
import './ProfessorTable.css';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importando ícones

const ProfessorTable = ({ professores, onEdit, onDelete }) => {
    if (!professores || professores.length === 0) {
        return <p>Nenhum professor encontrado.</p>;
    }

    return (
        <table className="professor-table">
            <thead>
                <tr>
                    <th>Foto</th> 
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Sexo</th>
                    <th>Idade</th>
                    <th>Matricula</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {professores.map(professor => (
                    <tr key={professor.id}>
                       <td><img src={professor.imageUrl} alt={`Foto`} className="professor-image" /></td> {/* Adicionando a foto do professor */}
                        <td>{professor.nome}</td>
                        <td>{professor.email}</td>
                        <td>{professor.sexo}</td>
                        <td>{professor.idade}</td>
                        <td>{professor.matricula}</td>
                        <td>
                            <FaEdit className="icon-edit" onClick={() => onEdit(professor)} />
                            <FaTrash className="icon-remove" onClick={() => onDelete(professor.cpf)} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProfessorTable;