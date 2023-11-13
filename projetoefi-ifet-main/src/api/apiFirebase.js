import { db, auth } from "../firebaseConfig";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import {
  doc, 
  setDoc,
  collection,
  deleteDoc,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const DEFAULT_PASSWORD = "123456";  // Isso é apenas um exemplo, você pode escolher uma senha padrão diferente.


export const getProfessores = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "professores"));
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  } catch (error) {
    console.error("Erro ao buscar professores:", error);
    return [];
  }
};

export const createProfessor = async (professor) => {
  try {
    // Registrar o professor no sistema de autenticação do Firebase
    const userCredential = await createUserWithEmailAndPassword(auth, professor.email, DEFAULT_PASSWORD);
    const uid = userCredential.user.uid;

    // Salvar os detalhes do professor no Firestore usando o UID como chave
    await addDoc(collection(db, "professores"), {
      ...professor,
      uid: uid,            // Armazenar o UID no documento do professor para referências futuras
      isDefaultPassword: true  // Indicar que a senha padrão está sendo usada
    });

    console.log("Professor registrado com sucesso.");
    return { ...professor, uid: uid };
  } catch (error) {
    console.error("Erro ao criar professor:", error);
    return null;
  }
};

export const updateProfessor = async (docId, professor) => {
  try {
    const professorRef = doc(db, "professores", docId);

    // Atualizar o professor usando setDoc com merge: true para apenas atualizar campos fornecidos
    await setDoc(professorRef, professor, { merge: true });

    console.log("Professor atualizado com sucesso");
    return professor;
  } catch (error) {
    console.error("Erro ao atualizar professor:", error);
    return null;
  }
};

export const deleteProfessor = async (uid) => {
  try {
    // Opcional: Deletar o usuário do sistema de autenticação
    // await deleteUser(auth.currentUser);  // Descomente se quiser deletar o usuário
    
    // Deletar o professor do Firestore
    const docRef = doc(db, "professores", uid);
    await deleteDoc(docRef);

    console.log("Professor deletado com sucesso.");
  } catch (error) {
    console.error("Erro ao deletar professor:", error);
  }
};

export const getAlunos = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "alunos"));
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  } catch (error) {
    console.error("Erro ao buscar alunos:", error);
    return [];
  }
};

export const createAluno = async (aluno) => {
  try {
    // Registrar o aluno no sistema de autenticação do Firebase
    const userCredential = await createUserWithEmailAndPassword(auth, aluno.email, DEFAULT_PASSWORD);
    const uid = userCredential.user.uid;

    // Salvar os detalhes do aluno no Firestore usando o UID como chave
    await addDoc(collection(db, "alunos"), {
      ...aluno,
      uid: uid,            // Armazenar o UID no documento do aluno para referências futuras
      isDefaultPassword: true  // Indicar que a senha padrão está sendo usada
    });

    console.log("Aluno registrado com sucesso.");
    return { ...aluno, uid: uid };
  } catch (error) {
    console.error("Erro ao criar aluno:", error);
    return null;
  }
};

export const updateAluno = async (docId, aluno) => {
  try {
    const alunoRef = doc(db, "alunos", docId);

    // Atualizar o aluno usando setDoc com merge: true para apenas atualizar campos fornecidos
    await setDoc(alunoRef, aluno, { merge: true });

    console.log("Aluno atualizado com sucesso");
    return aluno;
  } catch (error) {
    console.error("Erro ao atualizar aluno:", error);
    return null;
  }
};

export const deleteAluno = async (uid) => {
  try {
    // Opcional: Deletar o usuário do sistema de autenticação
    // await deleteUser(auth.currentUser);  // Descomente se quiser deletar o usuário
    
    // Deletar o aluno do Firestore
    const docRef = doc(db, "alunos", uid);
    await deleteDoc(docRef);

    console.log("Aluno deletado com sucesso.");
  } catch (error) {
    console.error("Erro ao deletar aluno:", error);
  }
};

export const handleImageUploadProf = async (imageFile) => {
  try {
    console.log("Iniciando upload da imagem...");

    const imageRef = ref(getStorage(), `fotoProfessores/${imageFile.name}`);  
    console.log("Referência à imagem criada...");

    const snapshot = await uploadBytesResumable(imageRef, imageFile);
    console.log("Imagem carregada com sucesso...");

    const imageUrl = await getDownloadURL(snapshot.ref);
    console.log("URL de download obtida:", imageUrl);

    return imageUrl;
  } catch (error) {
    console.error("Erro ao fazer upload da imagem:", error);
    return null;
  }
};

export const handleImageUploadAluno = async (imageFile) => {
  try {
    console.log("Iniciando upload da imagem...");

    const imageRef = ref(getStorage(), `fotoAlunos/${imageFile.name}`);  
    console.log("Referência à imagem criada...");

    const snapshot = await uploadBytesResumable(imageRef, imageFile);
    console.log("Imagem carregada com sucesso...");

    const imageUrl = await getDownloadURL(snapshot.ref);
    console.log("URL de download obtida:", imageUrl);

    return imageUrl;
  } catch (error) {
    console.error("Erro ao fazer upload da imagem:", error);
    return null;
  }
};

export const getTurmas = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "turmas"));
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  } catch (error) {
    console.error("Erro ao buscar turmas:", error);
    return [];
  }
};

export const createTurma = async (turma) => {
  try {
    // Salvar os detalhes do turma no Firestore usando o UID como chave
    await addDoc(collection(db, "turmas"), {
      ...turma
    });

    console.log("Turma registrado com sucesso.");
    return { ...turma};
  } catch (error) {
    console.error("Erro ao criar turma:", error);
    return null;
  }
};

export const updateTurma = async (docId, turma) => {
  try {
    const turmaRef = doc(db, "turmas", docId);

    // Atualizar o turma usando setDoc com merge: true para apenas atualizar campos fornecidos
    await setDoc(turmaRef, turma, { merge: true });

    console.log("turma atualizado com sucesso");
    return turma;
  } catch (error) {
    console.error("Erro ao atualizar turma:", error);
    return null;
  }
};

export const deleteTurma = async (uid) => {
  try {
    // Opcional: Deletar o usuário do sistema de autenticação
    // await deleteUser(auth.currentUser);  // Descomente se quiser deletar o usuário
    
    // Deletar o turma do Firestore
    const docRef = doc(db, "turmas", uid);
    await deleteDoc(docRef);

    console.log("Turma deletado com sucesso.");
  } catch (error) {
    console.error("Erro ao deletar turma:", error);
  }
};