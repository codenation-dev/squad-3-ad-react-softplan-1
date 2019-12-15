import React , { useEffect, useState } from 'react';
import { Input } from '@rocketseat/unform';
import { Link } from "react-router-dom";

import { Container, Log } from './styles'

const Dashboard = (props) => {
   const [logs, setLogs] = useState([]);
   const [origLogs, setOrigLogs] = useState([]);
   const [paginaAtual, setPaginaAtual] = useState(1);
   const [totalPaginas, setTotalPaginas] = useState(1);
   const [filtro, setFiltro] = useState("default");

   useEffect(() => {
     const token = localStorage.getItem("central-erros-auth-token");
     console.log(token);

     getLogs(token, 1);
   },[]);
 
   const getLogs = ( token, pagina) => {
     //https://centralerrosapp.herokuapp.com
      fetch(`https://centralerrosapp.herokuapp.com/paglogs/${pagina}/${token}`)
      .then(function(response){
        return response.text();
      }).then(data => {
          const json = JSON.parse(data);
          setOrigLogs(json.logs);
          if (filtro !== 'default') {
            setLogs(json.logs.filter(log => 
              log.type === filtro
            ));
            } else {
              setLogs(json.logs);
            }    
          setTotalPaginas(Math.ceil(json.total/10));
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
          } else {
            const token = localStorage.getItem("central-erros-auth-token");
            getLogs(token, paginaAtual);
          }
          setFiltro(e.target.value);
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
      if (paginaAtual-1>0) {
        const token = localStorage.getItem("central-erros-auth-token");
        setPaginaAtual(paginaAtual-1);
        getLogs(token, paginaAtual-1);
      }
    }

    const handleProxima = () => {
      if (paginaAtual+1<=totalPaginas) {
        const token = localStorage.getItem("central-erros-auth-token");
        setPaginaAtual(paginaAtual+1);
        getLogs(token, paginaAtual+1);
      }
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
            logs===null || logs.lenght === 0 ?
            (
            <Log key="0">
            <strong>sem dados</strong>
            <span>""</span>
            </Log>              
            ) :
            (
               logs.map( (log, idx) => {
                  return (
                  <Log key={idx}>
                  <strong>Level</strong>
		              <strong>{log.type}</strong>
		              <strong>Título</strong>
                  <span>{log.title}</span>
                  <strong>Eventos</strong>
		              <span>{log.quantity}</span>
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
         Pagina {paginaAtual} de {totalPaginas}
   </Container>
   )
}

export default Dashboard;
