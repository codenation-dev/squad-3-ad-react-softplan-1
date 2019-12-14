import React from "react";
import api from '../../services/api';
import { Input } from '@rocketseat/unform';

import { Container, Log } from './styles'

const Dashboard = (props) => {
   return <Container>
      <header>
         <select name="level" >
            <option value="value0" selected>Selecionar</option>
            <option value="value1">Produção</option>
            <option value="value2">Homologação</option>
            <option value="value3">Dev</option>
         </select>
         <select name="type" >
            <option value="value0" selected>Ordenar por</option>
            <option value="value1">Level</option>
            <option value="value2">Frequencia</option>
         </select>
         <select name="type" >
            <option value="value0" selected>Buscar por</option>
            <option value="value1">Level</option>
            <option value="value2">Descrição</option>
            <option value="value3">Origem</option>
         </select>
         <Input name="name" placeholder="Pesquisar aqui"></Input>
      </header>
      

         <ul>
            <Log>
               <strong>Data teste</strong>
               <span>Teste Nome</span>
            </Log>
            <Log>
               <strong>Data teste</strong>
               <span>Teste Nome</span>
               <span>Qts</span>
            </Log>
            <Log>
               <strong>Data teste</strong>
               <span>Teste Nome</span>
            </Log>
            <Log>
               <strong>Data teste</strong>
               <span>Teste Nome</span>
            </Log>
         </ul>
   </Container>
}

export default Dashboard;
