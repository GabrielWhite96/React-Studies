import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, db } from '../../services/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import logo from "../../imgs/logo1.png";
import "./style.css";

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Store the user data in the respective collection based on the selected role
        addDoc(collection(db, role), {
          name: name,
          email: email,
          role: role,
          uid: user.uid
        })
        .then(() => {
          console.log("User data stored successfully");
        })
        .catch((error) => {
          console.error("Error storing user data: ", error);
        });
      })
      .catch((error) => {
        console.error("Error creating user: ", error);
      });
  }

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="logo" />
        <span>Por favor digite suas informações de cadastro</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="João da Silva"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="joao@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="role">Função</label>
          <select
            name="role"
            id="role"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Selecione a função</option>
            <option value="Aluno">Aluno</option>
            <option value="Professor">Professor</option>
            <option value="Adm">Administrador</option>
          </select>
        </div>

        <button className="conect-button" onClick={handleSignOut}>
          Cadastrar
        </button>

        <div className='footer'>
          <p>Já possui uma conta?</p>
          <Link to='/'>Acesse sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}