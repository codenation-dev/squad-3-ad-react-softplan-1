import React, {useEffect, useState} from "react";
import {useParams } from "react-router-dom";
import { getLog } from '../../services/api.js'
import DetailItemText from '../../components/DetailItemText';
import DetailItemColor from '../../components/DetailItemColor';
import '../../bulma.min.css';

const Detail = (props) => {

  const {id_log} = useParams();  

  const [data, setData] = useState();

  const token = localStorage.getItem("central-erros-auth-token");

  useEffect(() => {
    getLog(props.history, token, id_log, setData)      
  }, [])  

  if ((data !== undefined) && (data !== null))
  return (
      <div>
        <div>    
          <DetailItemText   label={'Log ID ' + data.id}text={data.name}/>
          <DetailItemColor   type={data.type}/> 
        </div>  
        <div className="columns">
          <div className="column">          
            <DetailItemText  label="Título" text={data.title}/>
            <DetailItemText  label="Detalhes" text={data.detail}/>
          </div> 
          <div className="column">
            <DetailItemText  label="Eventos" text={data.quantity}/>     
            <DetailItemText  label="Origem" text={data.orign}/>
            <DetailItemText  label="Criado em" text={data.createDate}/>
          </div>  
        </div>
      </div>
  )

  return <p className="title has-text-white has-text-centered">Nenhum registro encontrado</p>;

}

export default Detail;