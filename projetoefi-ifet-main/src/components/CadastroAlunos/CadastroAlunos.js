import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import AlunoTable from "../AlunoTable";
import AlunoForm from "../AlunoForm";
import {
  getAlunos,
  createAluno,
  updateAluno,
  deleteAluno
} from "../../api/apiFirebase";
//}from "../../api/apiSpringBoot";

import "./CadastroAlunos.css";

Modal.setAppElement("#root");

const CadastroAlunos = () => {
  const [alunos, setAlunos] = useState([]);
  const [editingAluno, setEditingAluno] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAlunos();
      setAlunos(data);
    };

    fetchData();
  }, []);

  const handleAddOrUpdate = async (aluno) => {
    try {
      if (editingAluno) {

        const updatedAluno = await updateAluno(editingAluno.id,aluno);
        setAlunos(
          alunos.map((p) =>
            p.id === editingAluno.id ? updatedAluno : p
          )
        );
        setEditingAluno(null);
      } else {
        const newAluno = await createAluno(aluno);
        if (newAluno) {
          setAlunos([...alunos, newAluno]);
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
      "Você tem certeza de que deseja excluir este aluno?"
    );
    if (confirmDelete) {
      await deleteAluno(uid);
      setAlunos(alunos.filter((p) => p.uid !== uid));
    }
  };

  const handleEdit = (aluno) => {
    setEditingAluno(aluno);
    setIsModalOpen(true);
  };

  return (
    <div className="cadastro-alunos">
      <h1 className="title">Cadastro de Alunos</h1>

      <button className="add-btn" onClick={() => setIsModalOpen(true)}>
        Adicionar Aluno
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Adicionar Aluno"
      >
        <div className="modal-content">
        <AlunoForm
          onSubmit={handleAddOrUpdate}
          aluno={editingAluno}
        />
        <button className="close-btn" onClick={() => setIsModalOpen(false)}>
          Fechar
        </button>
        </div>
      </Modal>

      <AlunoTable
        alunos={alunos}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default CadastroAlunos;
