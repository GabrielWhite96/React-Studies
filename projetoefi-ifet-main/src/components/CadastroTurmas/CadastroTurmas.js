import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import TurmaTable from "../TurmaTable";
import TurmaForm from "../TurmaForm";
import {
  getTurmas,
  createTurma,
  updateTurma,
  deleteTurma
} from "../../api/apiFirebase";
//}from "../../api/apiSpringBoot";

import "./CadastroTurmas.css";

Modal.setAppElement("#root");

const CadastroTurmas = () => {
  const [turmas, setTurmas] = useState([]);
  const [editingTurma, setEditingTurma] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTurmas();
      setTurmas(data);
    };

    fetchData();
  }, []);

  const handleAddOrUpdate = async (turma) => {
    try {
      if (editingTurma) {
        const updatedTurma = await updateTurma(editingTurma.id,turma);
        setTurmas(
          turmas.map((p) =>
            p.id === editingTurma.id ? updatedTurma : p
          )
        );
        setEditingTurma(null);
      } else {
        const newTurma = await createTurma(turma);
        if (newTurma) {
          setTurmas([...turmas, newTurma]);
        }
      }
      setIsModalOpen(false);
      setErrorMessage(null); // Limpe o erro se a operação for bem-sucedida
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleDelete = async (uid) => {
    const confirmDelete = window.confirm(
      "Você tem certeza de que deseja excluir este turma?"
    );
    if (confirmDelete) {
      await deleteTurma(uid);
      setTurmas(turmas.filter((p) => p.uid !== uid));
    }
  };

  const handleEdit = (turma) => {
    setEditingTurma(turma);
    setIsModalOpen(true);
  };

  return (
    <div className="cadastro-turmas">
      <h1 className="title">Cadastro de Turmas</h1>

      <button className="add-btn" onClick={() => setIsModalOpen(true)}>
        Adicionar Turma
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Adicionar Turma"
      >
        <div className="modal-content">
          <TurmaForm
            onSubmit={handleAddOrUpdate}
            turma={editingTurma}
          />
          <button className="close-btn" onClick={() => setIsModalOpen(false)}>
            Fechar
          </button>
        </div>
      </Modal>

      <TurmaTable
        turmas={turmas}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default CadastroTurmas;
