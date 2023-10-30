// src/components/ProfessorForm.js
import "./ProfessorForm.css";
import React, { useState, useEffect } from "react";
import Professor from "../../models/Professor";
import { handleImageUploadProf } from '../../api/apiFirebase';

const ProfessorForm = ({ onSubmit, professor }) => {
  const [profData, setProfData] = useState(professor || new Professor());
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
      const imageUrl = await handleImageUploadProf(imageFile);

      if (imageUrl) {
        // Se o upload da imagem for bem-sucedido, atualize a URL da imagem no estado do professor
        setProfData({ ...profData, imageUrl });
        setImageUploaded(true); // Aqui
      }
    } else {
      // Se nenhum arquivo de imagem foi selecionado, continue apenas com a submissão dos dados do professor
      onSubmit(profData);
    }
  };


  useEffect(() => {
    if (profData.imageUrl && imageUploaded) {
      onSubmit(profData);
      setImageUploaded(false); // Reset the flag
    }
  }, [profData.imageUrl]);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui, chamamos a função handleImageUploadAndSubmit
    handleImageUploadAndSubmit(e);
    setProfData(new Professor());
  };

  const handleRemoveImage = () => {
    // Limpa a imagem de visualização e o arquivo selecionado
    setPreviewImage(null);
    setImageFile(null);

    // Se você também deseja limpar a URL da imagem do professor no estado, faça isso:
    setProfData({ ...profData, imageUrl: null });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
      <input
        type="text"
        placeholder="Nome"
        value={profData.nome}
        onChange={(e) => setProfData({ ...profData, nome: e.target.value })}
        required
      />
      </label>
      <label>
        Email:
        <input
          type="text"
          placeholder="Email"
          value={profData.email}
          onChange={(e) => setProfData({ ...profData, email: e.target.value })}
          required
        />
      </label>

      <label>
        Sexo:
        <input
          type="text"
          placeholder="Sexo"
          value={profData.sexo}
          onChange={(e) => setProfData({ ...profData, sexo: e.target.value })}
          required
        />
      </label>

      <label>
        Idade:
        <input
          type="number"
          placeholder="Idade"
          value={profData.idade}
          onChange={(e) =>
            setProfData({ ...profData, idade: parseInt(e.target.value) })
          }
          min="0"
        />
      </label>

      <label>
        Matricula:
        <input
          type="text"
          placeholder="Matricula"
          value={profData.matricula}
          onChange={(e) => setProfData({ ...profData, matricula: e.target.value })}
        />
      </label>

      <label>
        Foto do Professor:
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {/* Adicionar visualização da imagem e botão de remoção aqui */}
        {(previewImage || profData.imageUrl) && (
          <div>
            <img
              src={previewImage || profData.imageUrl}
              alt="Visualização"
              style={{ width: '100px', height: '100px', marginRight: '10px' }}
            />
            <button type="button" onClick={handleRemoveImage}>
              Remover imagem
            </button>
          </div>
        )}
      </label>

      <button type="submit">{professor ? "Atualizar" : "Adicionar"}</button>
    </form>
  );
};

export default ProfessorForm;
