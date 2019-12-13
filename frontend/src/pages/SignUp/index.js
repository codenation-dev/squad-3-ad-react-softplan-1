import React from "react";
import { Link } from "react-router-dom";
import { register } from '../../services/api.js'
import { Form, Input } from "@rocketseat/unform";

const SignUp = (props) => {

  const handleSubmit = ({name, email, pwd}) => {
    register(props.history, name, email, pwd)
  }

  return (
    <Form onSubmit={handleSubmit} >
      <Input name="name" type="text" placeholder="Seu nome" />
      <Input name="email" type="email" placeholder="Seu e-mail" />
      <Input name="pwd" type="password" placeholder="Sua senha secreta" />

      <button type="submit">Cadastrar</button>
      <Link to="/">Voltar</Link>
    </Form>
  );
}

export default SignUp;