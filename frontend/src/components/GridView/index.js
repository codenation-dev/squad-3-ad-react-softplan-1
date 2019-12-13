import React , { useEffect } from 'react'
import Datatable from '../Datatable';
import Button from '../Button';
import SelectOption from '../SelectOption';
import Search from '../Search';
import { getLogs } from '../../services/api.js'

export default function GridView() {

  const options = [ 
                    { type: ['Produção','Homologação','Dev'] },
                    { ordencao: ['Ordenar Por','Level','Frequência'] },
                    { busca: ['Buscar Por','Level','Descrição','Origem'] },
                  ]

  const columns = {};
  const data = {};

  const getItems = () => {
    getLogs()
      //.then(items => setColumns(items))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    console.log(getItems(localStorage.getItem("central-erros-auth-token")))
  });

  return (
     
    <React.Fragment>
      <div className="gridview" >
        <Button label={'Arquivar'} />
        <Button label={'Apagar'} />
        <SelectOption options={options}/>
        <SelectOption />
        <SelectOption />
        <Search />
        <Datatable columns={columns} items={getItems} />
      </div>
    </React.Fragment>
  )

}