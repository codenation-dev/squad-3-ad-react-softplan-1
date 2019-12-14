import React from "react";
import Header from "../../components/Header";
import {useParams} from "react-router-dom";
import api from '../../components/GridView/data.json';
import DetailItemText from '../../components/DetailItemText';
import DetailItemColor from '../../components/DetailItemColor';

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
      <>
        <Header />

        <button onClick={voltarHandler}>Voltar</button>

        <h2>Log ID {data.id}</h2>

        <div className="Content">
          <DetailItemText label="Nome" text={data.name}/>
          <DetailItemColor type={data.type}/>
          <DetailItemText label="Título" text={data.title}/>
          <DetailItemText label="Detalhes" text={data.detail}/>
          <DetailItemText label="Origem" text={data.orign}/>
          <DetailItemText label="Eventos" text={data.quantity}/>
          <DetailItemText label="Criado em" text={data.createDate}/>
        </div>  
      </>
  )
}

export default Detail;