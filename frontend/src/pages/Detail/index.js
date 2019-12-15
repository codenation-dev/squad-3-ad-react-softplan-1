import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import DetailItemText from '../../components/DetailItemText';
import DetailItemColor from '../../components/DetailItemColor';
import '../../bulma.min.css';

const Detail = (props) => {

  const {id_log} = useParams();  

  const voltarHandler = () => {
      props.history.push('/dashboard')
  } 
  const [data, setData] = useState({});

   useEffect(() => {
     const token = localStorage.getItem("central-erros-auth-token");
     console.log(token);
     getLog(token);
   },[]);

  //const itemLog = api.filter(el => el.id === parseInt(id_log))
  const getLog = ( token) => {
    fetch(`https://centralerrosapp.herokuapp.com/log/${id_log}/${token}`)
    .then(function(response){
      return response.text();
    }).then(data => {
        console.log(data);
        setData(JSON.parse(data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  if (data === null){
    props.history.push("/404")
    return <></>
  }

  //const data = itemLog[0]

  return (
      <div>

        <div>    
          <button className="button is-link is-small" onClick={voltarHandler}>Voltar</button>
          <DetailItemText   label={'Log ID ' + data.id}text={data.name}/>
          <DetailItemColor   type={data.type}/> 
        </div>  



        <div className="columns">
          <div className="column">          
            <DetailItemText  label="Título" text={data.title}/>
            <DetailItemText  label="Detalhes" text={data.detail}/>
          </div> 
          <div className="column">
            <DetailItemText  label="Situação" text={data.situacao==="I"?"Novo":"Arquivado"}/> 
            <DetailItemText  label="Eventos" text={data.quantity}/>     
            <DetailItemText  label="Origem" text={data.orign}/>
            <DetailItemText  label="Criado em" text={data.createDate}/>
          </div>  
        </div>
      </div>
  )
}

export default Detail;