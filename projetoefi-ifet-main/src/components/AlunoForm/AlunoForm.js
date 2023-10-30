// src/components/AlunoForm.js
import "./AlunoForm.css";
import React, { useState, useEffect } from "react";
import Aluno from "../../models/Aluno";
import { handleImageUploadAluno } from '../../api/apiFirebase';

const AlunoForm = ({ onSubmit, aluno }) => {
  const [alunoData, setAlunoData] = useState(aluno || new Aluno());
  const [imageFile, setImageFile] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [previewImage, setPreviewImage] = useState(null); // Novo state para a imagem de visualização


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    // Se um arquivo foi selecionado, cria uma URL temporária e atualiza o previewImage
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setPreviewImage(null);
    }
  };

  const handleImageUploadAndSubmit = async (e) => {
    e.preventDefault();

    if (imageFile) {
      const imageUrl = await handleImageUploadAluno(imageFile);

      if (imageUrl) {
        // Se o upload da imagem for bem-sucedido, atualize a URL da imagem no estado do aluno
        setAlunoData({ ...alunoData, imageUrl });
        setImageUploaded(true); // Aqui
      }
    } else {
      // Se nenhum arquivo de imagem foi selecionado, continue apenas com a submissão dos dados do aluno
      onSubmit(alunoData);
    }
  };


  useEffect(() => {
    if (alunoData.imageUrl && imageUploaded) {
      onSubmit(alunoData);
      setImageUploaded(false); // Reset the flag
    }
  }, [alunoData.imageUrl]);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui, chamamos a função handleImageUploadAndSubmit
    handleImageUploadAndSubmit(e);
    setAlunoData(new Aluno());
  };

  const handleRemoveImage = () => {
    // Limpa a imagem de visualização e o arquivo selecionado
    setPreviewImage(null);
    setImageFile(null);

    // Se você também deseja limpar a URL da imagem do aluno no estado, faça isso:
    setAlunoData({ ...alunoData, imageUrl: null });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          placeholder="Nome"
          value={alunoData.nome}
          onChange={(e) => setAlunoData({ ...alunoData, nome: e.target.value })}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          placeholder="Email"
          value={alunoData.email}
          onChange={(e) => setAlunoData({ ...alunoData, email: e.target.value })}
          required
        />
      </label>

      <label>
        Sexo:
        <input
          type="text"
          placeholder="Sexo"
          value={alunoData.sexo}
          onChange={(e) => setAlunoData({ ...alunoData, sexo: e.target.value })}
          required
        />
      </label>

      <label>
        Idade:
        <input
          type="number"
          placeholder="Idade"
          value={alunoData.idade}
          onChange={(e) =>
            setAlunoData({ ...alunoData, idade: parseInt(e.target.value) })
          }
          min="0"
        />
      </label>

      <label>
        Matricula:
        <input
          type="text"
          placeholder="Matricula"
          value={alunoData.matricula}
          onChange={(e) => setAlunoData({ ...alunoData, matricula: e.target.value })}
        />
      </label>

      <label>
        Foto do Aluno:
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {/* Adicionar visualização da imagem e botão de remoção aqui */}
        {(previewImage || alunoData.imageUrl) && (
          <div>
            <img
              src={previewImage || alunoData.imageUrl}
              alt="Visualização"
              style={{ width: '100px', height: '100px', marginRight: '10px' }}
            />
            <button type="button" onClick={handleRemoveImage}>
              Remover imagem
            </button>
          </div>
        )}
      </label>

      <button type="submit">{aluno ? "Atualizar" : "Adicionar"}</button>
    </form>
  );
};

export default AlunoForm;
