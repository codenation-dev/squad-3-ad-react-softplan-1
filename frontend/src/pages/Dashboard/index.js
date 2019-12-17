import React , { useEffect, useState } from 'react';
import { Input } from '@rocketseat/unform';
import { Link } from "react-router-dom";
import Modali, { useModali } from 'modali';

import { Container, Log, ButtonApagar, ButtonArquivar, ContainerPaginacao } from './styles'
import DetailItemColor from '../../components/DetailItemColor'

const Dashboard = (props) => {
   const [logs, setLogs] = useState([]);
   const [origLogs, setOrigLogs] = useState([]);
   const [paginaAtual, setPaginaAtual] = useState(1);
   const [totalPaginas, setTotalPaginas] = useState(1);
   const [filtro, setFiltro] = useState("default");
   const [ordenacao, setOrdenacao] = useState("default");   
   const [busca, setBusca] = useState("default");
   const [currentLog, setCurrentLog] = useState(0);


   useEffect(() => {
     const token = localStorage.getItem("central-erros-auth-token");
     console.log(token);

     getLogs(token, 1);
   },[]);
 
   const getLogs = ( token, pagina) => {
      fetch(`https://centralerrosapp.herokuapp.com/paglogs/${pagina}/${token}`)
      .then(function(response){
        return response.text();
      }).then(data => {
          const json = JSON.parse(data);
          setOrigLogs(json.logs);
          let resultado = json.logs;
          if (filtro !== 'default') {
            resultado = json.logs.filter(log => 
              log.type === filtro
            );
          }
          if (ordenacao !== 'default') {
            if (ordenacao === 'level') {
              resultado = origLogs.sort( ( prev, next ) => prev.type  < next.type ? -1 : (prev.type > next.type ? 1 : 0));       
            } else {
                resultado = origLogs.sort( ( prev, next ) => prev.quantity  < next.quantity ? -1 : (prev.quantity > next.quantity ? 1 : 0));
            }
          }
          setLogs(resultado);
          setBusca('default');
          let input = document.querySelector("input[name='search']");   
          input.value = "";
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
            setLogs(origLogs);
          }
          setFiltro(e.target.value);
        break;
        case 'order' :
            console.log('order')
            if (e.target.value !== 'default') {
                if (e.target.value === 'level') {
                    setLogs(
                        origLogs.sort( ( prev, next ) => prev.type  < next.type ? -1 : (prev.type > next.type ? 1 : 0))       
                    )
                } else {
                    setLogs(
                        origLogs.sort( ( prev, next ) => prev.quantity  < next.quantity ? -1 : (prev.quantity > next.quantity ? 1 : 0))       
                    )
                }
            } else {
              setLogs(origLogs);
            }            
          setOrdenacao(e.target.value);
          break;
          case 'search' :
            setBusca(e.target.value)
      }          
    };

    const handleKeyUp = () => {
      let input = document.querySelector("input[name='search']");   

      if (input.value !== '') {
        switch(busca) {
          case 'level' :
            setLogs(
              origLogs.filter(log => 
                log.type.toLowerCase().includes(input.value)
              )
            );              
          break;
          case 'level' :
            setLogs(
              origLogs.filter(log => 
                log.type.toLowerCase().includes(input.value)
              )
            );              
          break;
          case 'name' :
            setLogs(
              origLogs.filter(log => 
                log.name.toLowerCase().includes(input.value)
              )
            );              
          break;
        }
      } else { 
        setLogs(origLogs);
      }

    }
       
    const handleArquivar = (id) => {
      const token = localStorage.getItem("central-erros-auth-token");
      console.log("arquivar");
      fetch(`https://centralerrosapp.herokuapp.com/arquivalog/${id}/${token}`)
      .then(function(response){
        return response.text();
      }).then(data => {
          console.log("arquivado com sucesso");
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

    const [deletar, toggleExcluir] = useModali({
      animated: true,
      title: 'Confirmar',
      message: 'Deseja excluir este Log de Erro?',
      buttons: [
        <Modali.Button
          label="Cancelar"
          isStyleCancel
          onClick={() =>{ toggleExcluir() }}
        />,
        <Modali.Button
          label="Excluir"
          isStyleDestructive
          onClick={ () => {
                            handleDeletar(currentLog);
                            setCurrentLog(0);
                            toggleExcluir();
                  }}
        />,
      ],
    });

    const [arquivar, toggleArquivar] = useModali({
      animated: true,
      title: 'Confirmar',
      message: 'Deseja arquivar este Log de Erro?',
      buttons: [
        <Modali.Button
          label="Cancelar"
          isStyleCancel
          onClick={() =>{ toggleArquivar() }}
        />,
        <Modali.Button
          label="Arquivar"
          isStyleDestructive
          onClick={ () => {
                            handleArquivar(currentLog);
                            setCurrentLog(0);
                            toggleArquivar();
                  }}
        />,
      ],
    });


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
            <option value="quantity">Eventos</option>
         </select>
         <select name="search" onChange={handleChange}>
            <option value="default" selected>Buscar por</option>
            <option value="level">Level</option>
            <option value="name">Descrição</option>
         </select>
         <Input name="search" placeholder="Pesquisar aqui" onKeyUp={handleKeyUp}></Input>
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
                  <DetailItemColor type={log.type}/>
                  <Link to={`/detail/${log.id}`}>{log.title}</Link>
                  <div className="leftRight">

                    <div className="left">
                      <label>Eventos:</label>	
                      <label>{log.quantity}</label>
                    </div>  

                    <div className="left">
                      <label>Criação:</label>	
                      <label>{log.createDate}</label>
                    </div> 
                  </div>  

                  <div className="right">
                    <ButtonArquivar type="button" onClick={() => { toggleArquivar(); setCurrentLog(log.id) }}>Arquivar</ButtonArquivar>
                    <Modali.Modal {...arquivar} />
                    <ButtonApagar type="button" onClick={() => { toggleExcluir(); setCurrentLog(log.id) }}>Deletar</ButtonApagar>
                    <Modali.Modal {...deletar} />
                  </div>
                  </Log>         
                  );
               })       
            )
         }
         </ul>
         <ContainerPaginacao>
          <div>
            <button type="button" onClick={handleAnterior}>Anterior</button>
            <button type="button" onClick={handleProxima}>Próxima</button>
          </div>
          <div>
            <label>Pagina {paginaAtual} de {totalPaginas}</label>
          </div>
         </ContainerPaginacao>
   </Container>
   )
}

export default Dashboard;
