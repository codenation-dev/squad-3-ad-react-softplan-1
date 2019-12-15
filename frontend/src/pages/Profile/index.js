import React , { useEffect, useState } from 'react';
import { Container } from './styles'
import { Form, Input } from '@rocketseat/unform';
import { getUser } from '../../services/api.js'

export default function Profile(props) {
  const [login, setLogin] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("central-erros-auth-token");
    console.log(token);
    getUser(token, setLogin);
    console.log(login.name);
  },[]);
  
  const handleSair = () => {
    localStorage.removeItem("central-erros-auth-token");
    props.history.push("/");
  }

  return <Container>
    <Form>
      <Input name="name" placeholder="Nome completo" />
      <Input name="email" type="email" placeholder="Seu endereço de email"/>

      <hr/>

      <Input type="password" name="oldPassword" placeholder="Sua senha atual" />
      <Input type="password" name="Password" placeholder="Nova senha" />
      <Input type="password" name="ConfirmPassword" placeholder="Confirmação de senha" />

      <button type="submit">Atualizar perfil</button>
    </Form>
      <button type="button" onClick={handleSair}>Fazer logout</button>
  </Container>
}