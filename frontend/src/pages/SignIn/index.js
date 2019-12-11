import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { signInRequest } from "../../store/modules/auth/actions";
// Sugestão para o signUp, copiar esse esquema e apenas adicionar o nome e a linha que vou deixar.
const schema = Yup.object().shape({
  email: Yup.string()
    .email(`Insira um e-mail válido`)
    .required(`O e-mail é obrigatório`),
  password: Yup.string().required(`A senha é obrigatória`)
  // no singup pode por .min(6, 'a senha deve conter no minimo seis dígitos.')
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
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
    </>
  );
}
