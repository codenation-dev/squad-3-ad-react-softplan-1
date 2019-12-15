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

    const handleChangeLevel = e => {
        const token = localStorage.getItem("central-erros-auth-token");
        
        setLogs(getLogs(token));

        if (e.target.value !== 'default') {
        setLogs(
            logs.filter(log => 
                log.type === e.target.value
            )
        );
      }

        console.log(e.target.value);
        
        console.log(e.target.name);
    };


    const handleChange = e => {}


    const handleDeletar = () => {
       
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
         <select name="level" onChange={handleChangeLevel}>
            <option value="default" selected>Filtrar por Level</option>
            <option value="DEBUG">DEBUG</option>
            <option value="ERROR">ERROR</option>
            <option value="INFO">INFO</option>
            <option value="WARNING">WARNING</option>

         </select>
         <select name="type" onChange={handleChange}>
            <option value="default" selected>Ordenar por</option>
            <option value="level">Level</option>
            <option value="quantity">Frequencia</option>
         </select>
         <select name="type" onChange={handleChange}>
            <option value="default" selected>Buscar por</option>
            <option value="level">Level</option>
            <option value="name">Descrição</option>
            <option value="origin">Origem</option>
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
                  <>
                  <Log key={idx}>
                  <strong>Level</strong>
                  <span>{log.type}</span>
                  <button type="button" onClick={handleArquivar}>Arquivar</button>
                  <button type="button" onClick={handleDeletar}>Deletar</button>
                  </Log>         
                  <Log key={idx}>
                  <strong>Log</strong>
                  <span>{log.name}</span>
                  <span>{log.origin}</span>
                  <span>{log.data}</span>
                  <button type="button" onClick={handleArquivar}>Arquivar</button>
                  <button type="button" onClick={handleDeletar}>Deletar</button>
                  </Log>         
                  <Log key={idx}>
                  <strong>Eventos</strong>
                  <span>{log.quantity}</span>
                  <button type="button" onClick={handleArquivar}>Arquivar</button>
                  <button type="button" onClick={handleDeletar}>Deletar</button>
                  </Log>        
                  </> 

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