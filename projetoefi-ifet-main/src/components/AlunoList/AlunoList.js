// src/components/AlunosList.js

import React, { useState, useEffect } from 'react';
import AlunoItem from './AlunoItem';
import AlunoForm from '../AlunoForm';
import { getAlunos, createAluno, updateAluno, deleteAluno } from '../../api/AlunosAPI';
import Aluno from '../../models/Aluno';

const AlunosList = () => {
    const [alunos, setAlunos] = useState([]);
    const [editingAluno, setEditingAluno] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAlunos();
            setAlunos(data);
        };

        fetchData();
    }, []);

    const handleAddOrUpdate = async (aluno) => {
        if (editingAluno) {
            const updatedAluno = await updateAluno(editingAluno.id, aluno);
            setAlunos(alunos.map(p => p.id === editingAluno.id ? updatedAluno : p));
            setEditingAluno(null);
        } else {
            const newAluno = await createAluno(aluno);
            if (newAluno) {
                setAlunos([...alunos, newAluno]);
            }
        }
    };

    const handleDelete = async (id) => {
        await deleteAluno(id);
        setAlunos(alunos.filter(p => p.id !== id));
    };

    const handleEdit = (aluno) => {
        setEditingAluno(aluno);
    };

    return (
        <div className="alunos-list">
            <h2>Alunos</h2>
            <AlunoForm
                onSubmit={handleAddOrUpdate}
                aluno={editingAluno}
            />
            {alunos.map(aluno => (
                <AlunoItem
                    key={aluno.id}
                    aluno={aluno}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            ))}
        </div>
    );
}

export default AlunosList;
