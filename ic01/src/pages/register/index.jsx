import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';
import { useState } from "react";
import logo from "../../imgs/logo1.png";
import "./style.css";

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [createUserWithEmailAndPassword, user, loading, error] = 
    useCreateUserWithEmailAndPassword(auth);

    function handleSignOut(e) {
      e.preventDefault();
      createUserWithEmailAndPassword(email, password);
    }

    if (loading) {
      return <p>carregando...</p>;
    }

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="logo" />
        <span>Por favor digite suas informações de cadastro</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input 
            type="text" 
            name="email" 
            id="email" 
            placeholder="joao@gmail.com"
            onChange={(e) => setEmail(e.target.value)}>
          </input>
        </div>
        
        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="************"
            onChange={(e) => setPassword(e.target.value)}>
          </input>
        </div>

        <button className="conect-button" onClick={handleSignOut}>Cadastrar</button>

        <div className='footer'>
          <p>Você já tem uma conta?</p>
          <Link to='/'>Acesse sua conta aqui</Link>
        </div>

      </form>
    </div>
  );
}

