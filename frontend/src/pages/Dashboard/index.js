import React , { useEffect, useState } from 'react';
import { Input } from '@rocketseat/unform';
import { Link } from "react-router-dom";

import { Container, Log } from './styles'

const Dashboard = (props) => {
const [logs, setLogs] = useState([]);
const [origLogs, setOrigLogs] = useState([]);  

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
          const json = JSON.parse(data);
          setOrigLogs(json.logs);
          setLogs(json.logs);
        })
        .catch(error => {
          console.log(error.message);
        });
    };

    const handleChange = e => {
        
        switch (e.target.name) {
            case 'type' :
                if (e.target.value !== 'default') {
                    setLogs(
                        origLogs.filter(log => 
                            log.type === e.target.value
                    )
                  );
                }
            break;

            case 'order' :
                console.log('order')
                if (e.target.value !== 'default') {

                    if (e.target.value === 'level') {
                        setLogs(
                            origLogs.sort( ( prev, next ) => prev.type  > next.type ? -1 : (prev.type < next.type ? 1 : 0))       
                        )
                    } else {
                        setLogs(
                            origLogs.sort( ( prev, next ) => prev.quantity  < next.quantity ? -1 : (prev.quantity > next.quantity ? 1 : 0))       
                        )
                    }
                }
            break;

            case 'search' :
            break;
    
        }

        console.log(e.target.value);
        
        console.log(e.target.name);
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
         <select name="type" onChange={handleChange}>
            <option value="default" selected>Filtrar por Level</option>
            <option value="DEBUG">DEBUG</option>
            <option value="ERROR">ERROR</option>
            <option value="INFO">INFO</option>
            <option value="WARNING">WARNING</option>

         </select>
         <select name="order" onChange={handleChange}>
            <option value="default" selected>Ordenar por</option>
            <option value="level">Level</option>
            <option value="quantity">Frequencia</option>
         </select>
         <select name="search" onChange={handleChange}>
            <option value="default" selected>Buscar por</option>
            <option value="level">Level</option>
            <option value="name">Descrição</option>
            <option value="origin">Origem</option>
         </select>
         <Input name="name" placeholder="Pesquisar aqui"></Input>
      </header>
         <ul>
         {        

            logs === null?
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