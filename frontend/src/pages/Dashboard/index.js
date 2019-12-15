import React , { useEffect, useState } from 'react';
import api from '../../services/api';
import { Input } from '@rocketseat/unform';
import { Link } from "react-router-dom";

import { Container, Log } from './styles'

const Dashboard = (props) => {
   const [logs, setLogs] = useState([]);

   useEffect(() => {
     const token = localStorage.getItem("central-erros-auth-token");
     console.log(token);
     getLogs(token);
   },[]);
 
   const getLogs = ( token) => {
      fetch(`https://centralerrosapp.herokuapp.com/logs/${token}`)
      .then(function(response){
        return response.text();
      }).then(data => {
          console.log(data);
          setLogs(JSON.parse(data));
        })
        .catch(error => {
          console.log(error.message);
        });
    };

    const handleArquivar = () => {

    }

    const handleDeletar = () => {
       
    }

    const handleAnterior = () => {

    }

    const handleProxima = () => {
       
    }
   return (
   <Container>
         <header>
         <select name="level" >
            <option value="value0" selected>Seleção</option>
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
         {        
            logs === null ?
            (
            <Log>
            <strong>sem dados</strong>
            </Log>              
            ) :
            (
               logs.map( (log, idx) => {
                  return (
                  <Log key={idx}>
                  <strong>{log.type}</strong>
                  <span>log.title</span>
                  <button type="button" onClick={handleArquivar}>Arquivar</button>
                  <button type="button" onClick={handleDeletar}>Deletar</button>
                  </Log>         
                  );
               })       
            )
         }
         </ul>
         <button type="button" onClick={handleAnterior}>Anterior</button>
         <button type="button" onClick={handleProxima}>Próxima</button>
   </Container>
   )
}

export default Dashboard;
