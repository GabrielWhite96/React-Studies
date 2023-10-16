import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from 'react-router-dom';
import { auth } from '../../services/firebaseConfig';
import { useState } from "react";
import logo from "../../imgs/logo1.png";
import "./style.css";

export function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>carregando...</p>;
  }
  if (user) {
    return console.log(user);
  }

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="logo" />
        <span>Por favor digite suas informações de login</span>
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

        <a className='naosei' href='#'>Esqueceu sua senha?</a>

        <button className="conect-button" onClick={handleSignIn}>Conectar</button>

        <div className='footer'>
          <p>Você não tem uma conta?</p>
          <Link to='/register'>Crie sua conta aqui</Link>
        </div>

      </form>
    </div>
  );
}