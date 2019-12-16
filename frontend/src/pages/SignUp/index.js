import React from "react";
import { Link } from "react-router-dom";
import { register } from '../../services/api.js'
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string()
    .required(`O nome é obrigatório.`),

  email: Yup.string()
    .email(`Insira um e-mail válido.`)
    .required(`O e-mail é obrigatório.`),

  pwd: Yup.string()
               .required(`A senha é obrigatória.`)
               .min(6, 'A senha deve conter no mínimo seis dígitos.')
});

const SignUp = (props) => {

  const handleSubmit = ({name, email, pwd}) => {
    register(props.history, name, email, pwd)
  }

  return (
    <Form onSubmit={handleSubmit} schema={schema}>
      <Input name="name" type="text" placeholder="Seu nome" />
      <Input name="email" type="email" placeholder="Seu e-mail" />
      <Input name="pwd" type="password" placeholder="Sua senha secreta" />

      <button type="submit">Cadastrar</button>
      <Link to="/">Voltar</Link>
    </Form>
  );
}

export default SignUp;