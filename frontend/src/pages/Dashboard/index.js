import React , { useEffect, useState } from 'react';
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
          setLogs(JSON.parse(data));
        })
        .catch(error => {
          console.log(error.message);
        });
    };

    const handleArquivar = (id) => {
      const token = localStorage.getItem("central-erros-auth-token");
      console.log("arquivar");
      fetch(`https://centralerrosapp.herokuapp.com/arquivalog/${id}/${token}`)
      .then(function(response){
        return response.text();
      }).then(data => {
          setLogs(logs.filter(el => el.id !== id));
        })
        .catch(error => {
          console.log(error.message);
        });
    }

    const handleDeletar = (id) => {
      console.log("deletar");
      const token = localStorage.getItem("central-erros-auth-token");
      console.log("arquivar");
      fetch(`https://centralerrosapp.herokuapp.com/deletelog/${id}/${token}`)
      .then(function(response){
        return response.text();
      }).then(data => {
          setLogs(logs.filter(el => el.id !== id));
        })
        .catch(error => {
          console.log(error.message);
        });
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
                  <button type="button" onClick={() => handleArquivar(log.id)}>Arquivar</button>
                  <button type="button" onClick={() => handleDeletar(log.id)}>Deletar</button>
                  <Link to={`/detail/${log.id}`}>detalhe</Link>
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
