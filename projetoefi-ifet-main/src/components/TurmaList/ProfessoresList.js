// src/components/TurmasList.js

import React, { useState, useEffect } from 'react';
import TurmaItem from './TurmaItem';
import TurmaForm from '../TurmaForm';
import { getTurmas, createTurma, updateTurma, deleteTurma } from '../../api/TurmasAPI';
import Turma from '../../models/Turma';

const TurmasList = () => {
    const [turmas, setTurmas] = useState([]);
    const [editingTurma, setEditingTurma] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTurmas();
            setTurmas(data);
        };

        fetchData();
    }, []);

    const handleAddOrUpdate = async (turma) => {
        if (editingTurma) {
            const updatedTurma = await updateTurma(editingTurma.id, turma);
            setTurmas(turmas.map(p => p.id === editingTurma.id ? updatedTurma : p));
            setEditingTurma(null);
        } else {
            const newTurma = await createTurma(turma);
            if (newTurma) {
                setTurmas([...turmas, newTurma]);
            }
        }
    };

    const handleDelete = async (id) => {
        await deleteTurma(id);
        setTurmas(turmas.filter(p => p.id !== id));
    };

    const handleEdit = (turma) => {
        setEditingTurma(turma);
    };

    return (
        <div className="turmas-list">
            <h2>Turmas</h2>
            <TurmaForm
                onSubmit={handleAddOrUpdate}
                turma={editingTurma}
            />
            {turmas.map(turma => (
                <TurmaItem
                    key={turma.id}
                    turma={turma}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            ))}
        </div>
    );
}

export default TurmasList;
