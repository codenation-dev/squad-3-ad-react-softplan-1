import React from 'react';
import { Container } from './styles'
import { Form, Input } from '@rocketseat/unform';

export default function Profile() {
  return <Container>
    <Form>
      <Input name="name" placeholder="Nome completo"/>
      <Input name="email" type="email" placeholder="Seu endereço de email"/>

      <hr/>

      <Input type="password" name="oldPassword" placeholder="Sua senha atual" />
      <Input type="password" name="Password" placeholder="Nova senha" />
      <Input type="password" name="ConfirmPassword" placeholder="Confirmação de senha" />

      <button type="submit">Atualizar perfil</button>
    </Form>
      <button type="button">Fazer logout</button>
  </Container>
}