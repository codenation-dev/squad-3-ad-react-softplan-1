import React from "react";
import { Link } from "react-router-dom";
// import { Container } from './styles';
import { register } from '../../services/api.js'

export default function SignUp(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    register(props.history, event.target.name.value, event.target.email.value, event.target.pwd.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Seu nome" />
      <input name="email" type="email" placeholder="Seu e-mail" />
      <input name="pwd" type="password" placeholder="Sua senha secreta" />

      <button type="submit">Cadastrar</button>
      <Link to="/">Voltar</Link>
    </form>
  );
}
