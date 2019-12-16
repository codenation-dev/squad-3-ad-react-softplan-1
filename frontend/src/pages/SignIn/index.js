import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { login } from '../../services/api.js'
import { Mensagem } from './styles'

const schema = Yup.object().shape({
  email: Yup.string()
    .email(`Insira um e-mail válido`)
    .required(`O e-mail é obrigatório`),
  password: Yup.string().required(`A senha é obrigatória`)
  // no singup pode por .min(6, 'a senha deve conter no minimo seis dígitos.')
});

export default function SignIn(props) {
  const [mensagem, setMensagem] = useState("");

  function handleSubmit({ email, password }) {
    login(props.history, email, password, setMensagem);
  }
  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>

      </Form>
      <Mensagem>
        <label>{mensagem}</label>
      </Mensagem>
    </>
  );
}
