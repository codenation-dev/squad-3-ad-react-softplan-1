import React , { useEffect, useState } from 'react'
import Datatable from '../Datatable';
import SelectOption from '../SelectOption';
import Search from '../Search';
import { getLogs } from '../../services/api.js'
import api from './data.json';


export default function GridView() {

  const type = ['Produção','Homologação','Dev'];
  const ordenacao = ['Ordenar Por','Level','Frequência'] ;
  const busca = ['Buscar Por','Level','Descrição','Origem'];

  const gridColumns = ['','','Level','Logs','Eventos'];

  const data = api;

  const [columns, setColumns] = useState(gridColumns)
  const [items, setItems] = useState(data);

  useEffect(() => {
    console.log(localStorage.getItem("central-erros-auth-token"))
   // console.log(getItems(localStorage.getItem("central-erros-auth-token")))
    //setItems(getItems());
    console.log(data)
  });

  return (
     
    <React.Fragment>
      <div className="gridview" >
        <section>
        <div className="gridview-header">
          <SelectOption options={ type }/>
          <SelectOption options={ ordenacao }/>
          <SelectOption options={ busca }/>
          <Search className="input" />
        <Datatable columns={columns} items={items} />
        </div>
        </section>
      </div>
    </React.Fragment>
  )

}