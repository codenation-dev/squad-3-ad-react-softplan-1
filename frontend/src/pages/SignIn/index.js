import React from "react";
import { Link } from "react-router-dom";

// import { Container } from './styles';
import { login } from '../../services/api.js'

export default function SignIn(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    login(props.history, event.target.email.value, event.target.pwd.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Seu e-mail" />
      <input name="pwd" type="password" placeholder="Sua senha secreta" />

      <button type="submit">Acessar</button>
      <Link to="/register">Criar conta gratuita</Link>
    </form>
  );
}
