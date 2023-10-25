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

export const handleImageUpload = async (imageFile) => {
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