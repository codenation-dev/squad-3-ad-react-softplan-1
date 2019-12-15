import React , { useEffect, useState } from 'react';
import { Container } from './styles'
import { Form, Input } from '@rocketseat/unform';
import { register } from '../../services/api.js'
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string()
    .required(`O nome é obrigatório.`),
  email: Yup.string()
    .required(`O nome é obrigatório.`),

  pwd: Yup.string()
               .required(`A senha é obrigatória.`)
               .min(6, 'A senha deve conter no mínimo seis dígitos.')
});

export default function Profile(props) {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    const token = localStorage.getItem("central-erros-auth-token");
    console.log(token);
    getUser(token);
  },[]);
  
  const handleSubmit = ({name, email, pwd}) => {
    console.log("salva perfil");
    register(props.history, name, email, pwd)
  }

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
    <Form onSubmit={handleSubmit} schema={schema}>
      <Input name="name" placeholder="Nome completo" value={nome}/>
      <Input name="email" type="email" placeholder="Seu endereço de email"  value={email}/>

      <hr/>

      <Input type="password" name="oldPassword" placeholder="Sua senha atual" />
      <Input type="password" name="pwd" placeholder="Nova senha" />
      <Input type="password" name="ConfirmPassword" placeholder="Confirmação de senha" />

      <button type="submit">Atualizar perfil</button>
    </Form>
      <button type="button" onClick={handleSair}>Fazer logout</button>
  </Container>
}