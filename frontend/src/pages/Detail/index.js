import React from "react";
import {useParams} from "react-router-dom";
import api from '../../components/GridView/data.json';
import DetailItemText from '../../components/DetailItemText';
import DetailItemColor from '../../components/DetailItemColor';
import '../../bulma.min.css';

const Detail = (props) => {

  const {id_log} = useParams();  

  const voltarHandler = () => {
      props.history.push('/dashboard')
  } 

  const itemLog = api.filter(el => el.id === parseInt(id_log))

  if (itemLog.length === 0){
    props.history.push("/404")
    return <></>
  }

  const data = itemLog[0]

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
            <DetailItemText  label="Eventos" text={data.quantity}/>     
            <DetailItemText  label="Origem" text={data.orign}/>
            <DetailItemText  label="Criado em" text={data.createDate}/>
          </div>  
        </div>
      </div>
  )
}

export default Detail;