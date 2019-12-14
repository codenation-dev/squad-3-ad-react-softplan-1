import React from "react";
import Header from "../../components/Header";
import {useParams} from "react-router-dom";

const Detail = (props) => {

  const {id_log} = useParams();  

  const voltarHandler = () => {
      props.history.push('/dashboard')
  } 

  return (
      <>
        <Header />
        <button onClick={voltarHandler}>Voltar</button>
        <p>Log ID {id_log}</p>
        <h2>Título</h2>
        <h2>Detalhes</h2>
        <h2>Eventos</h2>
        <h2>Coletado por</h2>
      </>
  )
}

export default Detail;