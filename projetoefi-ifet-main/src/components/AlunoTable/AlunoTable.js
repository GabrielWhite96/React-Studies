// src/components/AlunoTable.js

import React from 'react';
import './AlunoTable.css';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importando ícones

const AlunoTable = ({ alunos, onEdit, onDelete }) => {
    if (!alunos || alunos.length === 0) {
        return <p>Nenhum aluno encontrado.</p>;
    }

    return (
        <table className="aluno-table">
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
                {alunos.map(aluno => (
                    <tr key={aluno.id}>
                       <td><img src={aluno.imageUrl} alt={`Foto`} className="aluno-image" /></td> {/* Adicionando a foto do aluno */}
                        <td>{aluno.nome}</td>
                        <td>{aluno.email}</td>
                        <td>{aluno.sexo}</td>
                        <td>{aluno.idade}</td>
                        <td>{aluno.matricula}</td>
                        <td>
                            <FaEdit className="icon-edit" onClick={() => onEdit(aluno)} />
                            <FaTrash className="icon-remove" onClick={() => onDelete(aluno.cpf)} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default AlunoTable;