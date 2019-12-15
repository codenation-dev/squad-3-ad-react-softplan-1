import React , { useEffect, useState } from 'react';
import { Container } from './styles'
import { Form, Input } from '@rocketseat/unform';
import { getUser } from '../../services/api.js'
import axios from "axios";

export default function Profile(props) {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const API = axios.create({ baseURL: "https://centralerrosapp.herokuapp.com" });
  
  useEffect(() => {
    const token = localStorage.getItem("central-erros-auth-token");
    console.log(token);
    getUser(token);
  },[]);
  
  const handleSair = () => {
    localStorage.removeItem("central-erros-auth-token");
    props.history.push("/");
  }
  const getUser = ( token) => {
    fetch(`https://centralerrosapp.herokuapp.com/findlogin/${token}`)
    .then(function(response){
      return response.text();
    }).then(data => {
        console.log(data);
        setNome(JSON.parse(data).name);
        setEmail(JSON.parse(data).email);
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  
  return  <Container>
    <Form>
      <Input name="name" placeholder="Nome completo" value={nome}/>
      <Input name="email" type="email" placeholder="Seu endereço de email"  value={email}/>

      <hr/>

      <Input type="password" name="oldPassword" placeholder="Sua senha atual" />
      <Input type="password" name="Password" placeholder="Nova senha" />
      <Input type="password" name="ConfirmPassword" placeholder="Confirmação de senha" />

      <button type="submit">Atualizar perfil</button>
    </Form>
      <button type="button" onClick={handleSair}>Fazer logout</button>
  </Container>
}